'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToGetApi extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.getServiceTime')
            .then(getServiceTime => {
                if (!getServiceTime) {
                    throw new Error('Unable to find getApi load metrics in page');
                }
                return getServiceTime;
            });
    }
}

module.exports = TimeToGetApi;