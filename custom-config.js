'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'getApi-gatherer'
        ]
    }],

    audits: [
        'card-audit',
        'getApi-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'card-audit', weight: 1},
                {id: 'getApi-audit', weight: 1}
            ]
        }
    }
};