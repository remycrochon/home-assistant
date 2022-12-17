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
exports.generateCAStore = exports.generateCertificatesArray = void 0;
const node_forge_1 = require("node-forge");
/**
 * Function used to convert certificate chain string into Certificate Object Array
 * @param {string} certChain certificate chain in pem format
 * @return {pki.Certificate[]}
 */
const CERT_START_KEY = '-----BEGIN CERTIFICATE-----';
const CERT_END_KEY = '-----END CERTIFICATE-----';
function generateCertificatesArray(certChain) {
    const certs = [];
    while (certChain.length > 0) {
        const start = certChain.indexOf(CERT_START_KEY);
        const end = certChain.indexOf(CERT_END_KEY) + CERT_END_KEY.length;
        const certString = certChain.slice(start, end);
        certs.push(node_forge_1.pki.certificateFromPem(certString));
        certChain = certChain.slice(end).trim();
    }
    return certs;
}
exports.generateCertificatesArray = generateCertificatesArray;
/**
 * Function used to generate ca store based on input root CAs list
 * @param {string[]} certs root CAs in pem format
 */
function generateCAStore(certs) {
    const caStore = node_forge_1.pki.createCaStore([]);
    for (const cert of certs) {
        try {
            caStore.addCertificate(cert);
        }
        catch (e) {
            // do nothing
            // node-forge doesn't support ECDSA encrypted pem
        }
    }
    return caStore;
}
exports.generateCAStore = generateCAStore;
//# sourceMappingURL=helper.js.map