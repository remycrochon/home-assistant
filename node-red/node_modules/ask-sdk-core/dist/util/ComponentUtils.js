"use strict";
/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.egressFromComponent = exports.launchComponent = void 0;
const ask_sdk_runtime_1 = require("ask-sdk-runtime");
const RequestEnvelopeUtils_1 = require("./RequestEnvelopeUtils");
function launchComponent(options) {
    const directiveType = "Dialog.DelegateRequest";
    const delegationTarget = "AMAZON.Conversations";
    const updatedRequestType = "Dialog.InputRequest";
    const delegationPeriod = {
        until: 'EXPLICIT_RETURN'
    };
    if (!options || options.isUserUtteranceInput || !options.utteranceSetName) {
        const delegateRequestDirective = {
            type: directiveType,
            target: delegationTarget,
            period: delegationPeriod
        };
        return delegateRequestDirective;
    }
    const dialogInput = {
        name: options.utteranceSetName,
        slots: options.slots || {}
    };
    const updatedRequest = {
        type: updatedRequestType,
        input: dialogInput
    };
    const delegateRequestDirective = {
        type: directiveType,
        target: delegationTarget,
        period: delegationPeriod,
        updatedRequest
    };
    return delegateRequestDirective;
}
exports.launchComponent = launchComponent;
function egressFromComponent(actionName, egressInput) {
    if (!egressInput.intentName && !egressInput.handle) {
        throw (0, ask_sdk_runtime_1.createAskSdkError)("ComponentUtils", "No intentName or handle callback provided for egressing from skill component");
    }
    const directiveType = "Dialog.DelegateRequest";
    const delegationTarget = "skill";
    const updatedRequestType = "IntentRequest";
    const delegationPeriod = {
        until: 'EXPLICIT_RETURN'
    };
    const skillRequestType = 'Dialog.API.Invoked';
    const delegateToIntentHandler = {
        canHandle(input) {
            return (0, RequestEnvelopeUtils_1.getRequestType)(input.requestEnvelope) === skillRequestType
                && input.requestEnvelope.request.apiRequest.name === actionName;
        },
        handle(input) {
            if (egressInput.handle) {
                return egressInput.handle(input);
            }
            const intent = {
                name: egressInput.intentName,
                confirmationStatus: 'NONE'
            };
            const updatedRequest = {
                type: updatedRequestType,
                intent
            };
            const delegateRequestDirective = {
                type: directiveType,
                target: delegationTarget,
                period: delegationPeriod,
                updatedRequest
            };
            return input.responseBuilder.addDirective(delegateRequestDirective).getResponse();
        }
    };
    return delegateToIntentHandler;
}
exports.egressFromComponent = egressFromComponent;
//# sourceMappingURL=ComponentUtils.js.map