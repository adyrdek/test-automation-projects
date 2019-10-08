"use strict"
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumServerJar: "../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar",

    restartBrowserBetweenTests: false,

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [ "incognito" ]
        }
    },

    suites: ["./login_page/login.specs.js",
    "./login_page/creds.specs.js"],

    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));
      }
}