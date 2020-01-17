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
const homePageObject_1 = require("../page-objects/homePageObject");
const practiceLandingPageObjects_1 = require("../page-objects/practiceLandingPageObjects");
const constants_1 = require("../constants");
const helper = require("../helpers");
describe('Embibe', () => {
    let homePageElements = new homePageObject_1.EmbibeHomePage();
    let homePageConstants = new constants_1.TestConstants();
    let practicePageElements = new practiceLandingPageObjects_1.PracticePageObjects();
    let EC = protractor_1.protractor.ExpectedConditions;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(homePageConstants.homePageUrl);
    }));
    it('should load the homepage', () => __awaiter(void 0, void 0, void 0, function* () {
        let url = protractor_1.browser.getCurrentUrl();
        expect(url).toContain(homePageConstants.homePageUrl);
    }));
    it('should validate the presence of header links', () => __awaiter(void 0, void 0, void 0, function* () {
        // for(let i = 0; i < homePageElements.allHeaderElement.length; i++){
        //     let element = homePageElements.allHeaderElement[i];
        //     await expect<any>(element.isPresent()).toBeTruthy();
        // }
        homePageElements.allHeaderElement.each(function (element, index) {
            return __awaiter(this, void 0, void 0, function* () {
                let elem = yield element.$('a').getAttribute('href');
                console.log(elem);
                expect(element.isPresent()).toBeTruthy();
            });
        });
    }));
    it('should validate the presence of elements in the DOM body', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield homePageElements.startPractice.isPresent()).toBeTruthy();
        expect(yield homePageElements.takeTest.isPresent()).toBeTruthy();
        expect(yield homePageElements.whatWouldYouLikeToStudyElement.isPresent).toBeTruthy();
    }));
    it('should be able to complete practice flow successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        yield homePageElements.startPractice.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toEqual(homePageConstants.practiceUrl);
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ESCAPE).perform();
        // let chatbox = element(by.css("span[data-testid='prompt-cross']"));
        // browser.wait(EC.visibilityOf(chatbox), 5000);
        // await chatbox.click();
        yield practicePageElements.practiceButton.click();
        // await element(by.css("span[data-testid='prompt-cross']")).click();
        //span.minimized-view-cross-icon.open
        // let handles = await browser.getAllWindowHandles();
        //else put a console , error statement and break/ or use a try catch block
        // if (handles.length>0){
        //     let newWindowHandle = handles[1];
        //     await browser.switchTo().window(newWindowHandle);
        // }
        // else {
        //     console.log("no new window created");
        // }
        try {
            let handles = yield protractor_1.browser.getAllWindowHandles();
            let newWindowHandle = handles[1];
            yield protractor_1.browser.switchTo().window(newWindowHandle);
        }
        catch (_a) {
            console.log("no new window created");
        }
        finally {
            expect(yield protractor_1.browser.getCurrentUrl()).toMatch(homePageConstants.practiceJEESessionUrl);
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ESCAPE).perform();
            expect(yield practicePageElements.popUpModalContent.getText()).toEqual(homePageConstants.expectedPopUpText);
            yield practicePageElements.continue.click();
            let attemptCounter = 2;
            while (attemptCounter != 0) {
                yield helper.attempt();
                attemptCounter--;
            }
            yield practicePageElements.skipQuest1.click();
            // endSession
            yield practicePageElements.endSession.click();
            yield practicePageElements.endSessionConfirm.click();
            expect(yield protractor_1.browser.getCurrentUrl()).toEqual(homePageConstants.practiceUrl);
        }
    }));
});
//# sourceMappingURL=homepage-spec.js.map