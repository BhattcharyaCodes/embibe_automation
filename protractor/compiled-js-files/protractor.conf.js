"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
        // args: [ "--headless", "--disable-gpu" ]
        },
    },
    framework: 'jasmine',
    specs: [
        //'./e2e_test_suite/spec/google.search.homepage.spec.js'
        // './e2e_test_suite/spec/maps.spec.js'
        // './e2e_test_suite/spec/spotify.read.get.api.spec.ts'
        './test_spec/homepage-spec.js'
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots',
            screenshotsSubfolder: 'images'
        }).getJasmine2Reporter());
        let globals = require('protractor');
        let browser = globals.browser;
        //let browser = globals.browser;
        yield browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization = true;
        yield browser.driver.manage().window().maximize();
        yield browser.driver.manage().window().setPosition(0, 0);
        yield browser.manage().timeouts().implicitlyWait(5000);
        // let EC = protractor.ExpectedConditions;
    }),
    onComplete: () => {
        protractor_1.browser.close();
    }
};
//# sourceMappingURL=protractor.conf.js.map