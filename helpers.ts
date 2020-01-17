
import {by, By, $, $$, browser, protractor} from 'protractor';
import {PracticePageObjects} from './page-objects/practiceLandingPageObjects';
import {TestConstants} from './constants';

let homePageConstants = new TestConstants();
let practicePageElements = new PracticePageObjects();

export async function attempt() {

    await practicePageElements.attemptAnswer.click();
    await practicePageElements.checkQuest.click();
    await practicePageElements.continuRequest.click();
}

