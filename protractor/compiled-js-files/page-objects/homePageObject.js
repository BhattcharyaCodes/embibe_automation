"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EmbibeHomePage {
    constructor() {
        this.ask = protractor_1.$('a[href="/ask"]');
        this.allHeaderElement = protractor_1.$$('li.nav-item');
        this.study = protractor_1.$$('li.nav-item').get(1);
        this.jump = protractor_1.$$('li.nav-item').get(2);
        this.rankUp = protractor_1.$$('li.nav-item').get(3);
        this.ai = protractor_1.$$('li.nav-item').get(4);
        this.institute = protractor_1.$$('li.nav-item').get(5);
        this.login = protractor_1.$('button.create-profile');
        this.startPractice = protractor_1.$('a.practice-btn');
        this.takeTest = protractor_1.$('a.test-btn');
        this.whatWouldYouLikeToStudyElement = protractor_1.$('h1.text-center.search-slogen');
    }
}
exports.EmbibeHomePage = EmbibeHomePage;
//# sourceMappingURL=homePageObject.js.map