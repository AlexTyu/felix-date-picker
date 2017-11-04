"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var SplitByWeeksPipe = (function () {
    function SplitByWeeksPipe() {
    }
    SplitByWeeksPipe.prototype.transform = function (value, args) {
        return lodash_1.chunk(value, 7);
    };
    SplitByWeeksPipe = __decorate([
        core_1.Pipe({
            name: 'splitByWeeks'
        })
    ], SplitByWeeksPipe);
    return SplitByWeeksPipe;
}());
exports.SplitByWeeksPipe = SplitByWeeksPipe;
