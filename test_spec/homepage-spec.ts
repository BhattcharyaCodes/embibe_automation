import {by, By, $, $$, browser, protractor, element, ExpectedConditions} from 'protractor';

import {EmbibeHomePage} from '../page-objects/homePageObject';
import {PracticePageObjects} from '../page-objects/practiceLandingPageObjects';
import {TestConstants} from '../constants';
import * as helper from '../helpers';

describe('Embibe', () => {

    let homePageElements = new EmbibeHomePage();
    let homePageConstants = new TestConstants();
    let practicePageElements = new PracticePageObjects();
    let EC = protractor.ExpectedConditions;


    beforeEach(async () => {
        await browser.get(homePageConstants.homePageUrl);
    });

    it('should load the homepage', async () => {
        let url = browser.getCurrentUrl();
        expect<any>(url).toContain(homePageConstants.homePageUrl);
    });

    it('should validate the presence of header links', async () => {

        // for(let i = 0; i < homePageElements.allHeaderElement.length; i++){
        //     let element = homePageElements.allHeaderElement[i];
        //     await expect<any>(element.isPresent()).toBeTruthy();
        // }

        homePageElements.allHeaderElement.each(async function (element, index) {
            let elem = await element.$('a').getAttribute('href');
            console.log(elem);
            expect<any>(element.isPresent()).toBeTruthy();
        });
    });

    it('should validate the presence of elements in the DOM body', async () => {
         expect<any>(await homePageElements.startPractice.isPresent()).toBeTruthy();
         expect<any>(await homePageElements.takeTest.isPresent()).toBeTruthy();
         expect<any>(await homePageElements.whatWouldYouLikeToStudyElement.isPresent).toBeTruthy();
    });

    it('should be able to complete practice flow successfully', async () => {
        await homePageElements.startPractice.click();
        expect<any>(await browser.getCurrentUrl()).toEqual(homePageConstants.practiceUrl);
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        // let chatbox = element(by.css("span[data-testid='prompt-cross']"));
        // browser.wait(EC.visibilityOf(chatbox), 5000);
        // await chatbox.click();
        await practicePageElements.practiceButton.click();
        try
        {
            let handles = await browser.getAllWindowHandles();
            let newWindowHandle = handles[1];
            await browser.switchTo().window(newWindowHandle);
        }
        catch{
                console.log("no new window created");
        }
        finally {
            expect(await browser.getCurrentUrl()).toMatch(homePageConstants.practiceJEESessionUrl);
            await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            expect(await practicePageElements.popUpModalContent.getText()).toEqual(homePageConstants.expectedPopUpText);
            await practicePageElements.continue.click();
            let attemptCounter:number = 2;
            while(attemptCounter!=0){
                await helper.attempt();
                attemptCounter--;
            }
            await practicePageElements.skipQuest1.click();
            // endSession
            await practicePageElements.endSession.click();
            await practicePageElements.endSessionConfirm.click();
            expect<any>(await browser.getCurrentUrl()).toEqual(homePageConstants.practiceUrl);
        }

    });

});