'use strict';

const Audit = require('lighthouse').Audit;

const MAX_GET_API_TIME = 3000;

class LoadAuditApi extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'getApi-audit',
            description: 'first called api',
            failureDescription: 'get api slow to initialize',
            helpText: 'it is used to measure the first call to api' +
            ' api is shown.',

            requiredArtifacts: ['TimeToGetApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToGetApi;
        const belowThreshold = loadedTime <= MAX_GET_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}
module.exports = LoadAuditApi;