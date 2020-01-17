"use strict";
// button.custom-button-component
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class PracticePageObjects {
    constructor() {
        this.practiceButton = protractor_1.$$('button.custom-button-component').get(0);
        this.popUpModalContent = protractor_1.$('div.login-modal-content');
        this.continue = protractor_1.$('div.btn-container.round.login-modal-continueBtn ');
        this.attemptAnswer = protractor_1.$$('div.answer-mcq-wrapper__text').get(0);
        // attemptQuest2 = $$('div.answer-mcq-wrapper__text').get(1);
        this.skipQuest1 = protractor_1.$('button.btn.button-skip');
        this.checkQuest = protractor_1.$('button#checkBtnId');
        this.continuRequest = protractor_1.$('button.validation-continue-button');
        // validation-continue-button
        this.endSession = protractor_1.$('div.session-snippet--heading-text--end');
        this.endSessionConfirm = protractor_1.$('a.button-session-end');
        this.statImg = protractor_1.$("img.statistics-element-image");
    }
}
exports.PracticePageObjects = PracticePageObjects;
//# sourceMappingURL=practiceLandingPageObjects.js.map