/**
 * NodeRED Alexa SmartHome
 * Copyright 2022 Claudio Chimera <Claudio.Chimera at gmail.com>.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/

const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const axios = require('axios');

const debug = 'True' == process.env.DEBUG;
const base_url = process.env.BASE_URL;
const GIVEN_NAME_PERMISSION = ['alexa::profile:given_name:read'];

if (debug) {
    console.log('base_url: ' + base_url);
};

const config = {
    timeout: 6500,
    headers: { 'Accept': 'application/json' }
};

const languageStrings = {
    en: {
        translation: {
            WELCOME_MSG: `Welcome to smart home {{name}}. What i can do for you? `,
            OK_MSG: 'OK.',
            REJECTED_MSG: 'No problem.',
            HELP_MSG: `You can control Your Smart Home?`,
            GOODBYE_MSG: 'Goodbye!',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            API_ERROR_MSG: `I'm sorry, I'm having trouble accessing the smart home, Please try again later. `,
            ERROR_MSG: 'Sorry, there was an error. Please try again.'
        }
    },
    it: {
        translation: {
            WELCOME_MSG: `Benvenuto {{name}} nella casa domotica. Cosa posso fare? `,
            OK_MSG: 'OK.',
            REJECTED_MSG: 'Nessun problema.',
            HELP_MSG: 'Posso comunicare con la tua casa domotica. Cosa vuoi fare? ',
            GOODBYE_MSG: 'A presto!',
            FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
            API_ERROR_MSG: `Sto avendo qualche intoppo contattando la tua casa domotica. Riprova più tardi. `,
            ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.'
        }
    },
    es: {
        translation: {
            WELCOME_MSG: 'Te doy la bienvenida a Feliz Cumpleaños. Vamos a divertirnos un poco con tu cumpleaños! ',
            OK_MSG: 'OK.',
            REJECTED_MSG: 'No pasa nada. Por favor dime la fecha otra vez y lo corregimos.',
            HELP_MSG: 'Puedes decirme el día, mes y año de tu nacimiento y tomaré nota de ello. También puedes decirme, registra mi cumpleaños y te guiaré. Qué quieres hacer?',
            GOODBYE_MSG: 'Hasta luego!',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
            ERROR_MSG: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez.'
        }
    },
    fr: {
        translation: {
            WELCOME_MSG: 'Bienvenue sur la Skill des anniversaires! ',
            OK_MSG: 'OK.',
            REJECTED_MSG: 'D\'accord, je ne vais pas prendre en compte cette date. Dites-moi une autre date pour que je puisse l\'enregistrer.',
            HELP_MSG: 'Je peux me souvenir de votre date de naissance. Dites-moi votre jour, mois et année de naissance ou bien dites-moi simplement \'"enregistre mon anniversaire"\' et je vous guiderai. Quel est votre choix ?',
            GOODBYE_MSG: 'Au revoir!',
            FALLBACK_MSG: 'Désolé, je ne sais pas répondre à votre demande. Pouvez-vous reformuler?.',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler?'
        }
    }
}

const forwardEvent = async function (event) {
    async function getJsonResponse(event) {
        const res = await axios.post(base_url, event, config);
        return res.data;
    }

    return getJsonResponse(event).then((result) => {
        return result;
    }).catch((error) => {
        console.log("Request error " + error);
        return null;
    });
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        // const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const name = "ciccio"; // sessionAttributes['name'] || '';
        const speechText = handlerInput.t('WELCOME_MSG', {name: name});

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const ForwardEventIntentHandler = {
    canHandle(handlerInput) {
        return true; // Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
           // && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ForwardEventIntent';
    },
    async handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        const { intent } = requestEnvelope.request;

        let speechText = handlerInput.t('REJECTED_MSG');

        console.log("CCHI handlerInput.requestEnvelope " + JSON.stringify(handlerInput.requestEnvelope));
        const res = await forwardEvent(handlerInput.requestEnvelope);
        console.log("CCHI RES " + JSON.stringify(res));

        if (res) {
            speechText = handlerInput.t('OK_MSG');
        } else {
            const repromptText = handlerInput.t('API_ERROR_MSG');
            responseBuilder.reprompt(repromptText);
        }

        return responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('GOODBYE_MSG');

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speechText = handlerInput.t('FALLBACK_MSG');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(handlerInput.t('HELP_MSG'))
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speechText = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(handlerInput.t('HELP_MSG'))
            .getResponse();
    }
};

const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    }
};

const LoggingResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

const LocalisationRequestInterceptor = {
    process(handlerInput) {
        const localisationClient = i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings,
            returnObjects: true
        });
        localisationClient.localise = function localise() {
            const args = arguments;
            const value = i18n.t(...args);
            if (Array.isArray(value)) {
                return value[Math.floor(Math.random() * value.length)];
            }
            return value;
        };
        handlerInput.t = function translate(...args) {
            return localisationClient.localise(...args);
        }
    }
};

const LoadNameRequestInterceptor = {
    async process(handlerInput) {
        const {attributesManager, serviceClientFactory, requestEnvelope} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();
        console.log("LoadNameRequestInterceptor");
        if (!sessionAttributes['name']){
            // let's try to get the given name via the Customer Profile API
            // don't forget to enable this permission in your skill configuratiuon (Build tab -> Permissions)
            // or you'll get a SessionEndedRequest with an ERROR of type INVALID_RESPONSE
            // Per our policies you can't make personal data persistent so we limit "name" to session attributes
            try {
                const {permissions} = requestEnvelope.context.System.user;
                if (!(permissions && permissions.consentToken))
                    throw { statusCode: 401, message: 'No permissions available' }; // there are zero permissions, no point in intializing the API
                const upsServiceClient = serviceClientFactory.getUpsServiceClient();
                const profileName = await upsServiceClient.getProfileGivenName();
                if (profileName) { // the user might not have set the name
                    //save to session attributes
                    sessionAttributes['name'] = profileName;
                }
            } catch (error) {
                console.log("LoadNameRequestInterceptor error");
                console.log(JSON.stringify(error));
                if (error.statusCode === 401 || error.statusCode === 403) {
                    // the user needs to enable the permissions for given name, let's append a permissions card to the response.
                    handlerInput.responseBuilder.withAskForPermissionsConsentCard(GIVEN_NAME_PERMISSION);
                }
            }
        }
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        ForwardEventIntentHandler
    )
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor,
        LoggingRequestInterceptor,
        //LoadNameRequestInterceptor
    )
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .withCustomUserAgent('alexa/node-red/smart-home')
    .lambda();
