let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar",

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ["incognito"]
        }
    },

    specs: ["./tests/sample.specs.js"],

    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));
      }
};