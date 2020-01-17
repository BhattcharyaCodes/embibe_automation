import {browser, by , By, element, $, $$, protractor, ExpectedConditions} from "protractor" ;


export class EmbibeHomePage {
    ask = $('a[href="/ask"]');
    allHeaderElement = $$('li.nav-item');
    study = $$('li.nav-item').get(1);
    jump = $$('li.nav-item').get(2);
    rankUp = $$('li.nav-item').get(3);
    ai = $$('li.nav-item').get(4);
    institute = $$('li.nav-item').get(5);
    login = $('button.create-profile');
    startPractice = $('a.practice-btn');
    takeTest = $('a.test-btn');
    whatWouldYouLikeToStudyElement = $('h1.text-center.search-slogen');

}