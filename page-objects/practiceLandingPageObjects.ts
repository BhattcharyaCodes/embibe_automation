// button.custom-button-component

import {browser, by , By, element, $, $$, protractor, ExpectedConditions} from "protractor" ;

export class PracticePageObjects{
    practiceButton = $$('button.custom-button-component').get(0);
    popUpModalContent = $('div.login-modal-content');
    continue = $('div.btn-container.round.login-modal-continueBtn ');
    attemptAnswer = $$('div.answer-mcq-wrapper__text').get(0);
    // attemptQuest2 = $$('div.answer-mcq-wrapper__text').get(1);
    skipQuest1 = $('button.btn.button-skip');
    checkQuest = $('button#checkBtnId');

    continuRequest = $('button.validation-continue-button');
    // validation-continue-button
    endSession = $('div.session-snippet--heading-text--end');
    endSessionConfirm = $('a.button-session-end');
    statImg = $("img.statistics-element-image");
}
