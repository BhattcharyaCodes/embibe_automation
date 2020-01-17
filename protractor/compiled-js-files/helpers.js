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
const practiceLandingPageObjects_1 = require("./page-objects/practiceLandingPageObjects");
const constants_1 = require("./constants");
let homePageConstants = new constants_1.TestConstants();
let practicePageElements = new practiceLandingPageObjects_1.PracticePageObjects();
function attempt() {
    return __awaiter(this, void 0, void 0, function* () {
        yield practicePageElements.attemptAnswer.click();
        yield practicePageElements.checkQuest.click();
        yield practicePageElements.continuRequest.click();
    });
}
exports.attempt = attempt;
//# sourceMappingURL=helpers.js.map