"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var felix_date_picker_component_1 = require("./felix-date-picker.component");
var to_weekday_pipe_1 = require("./pipes/to-weekday.pipe");
var split_by_weeks_pipe_1 = require("./pipes/split-by-weeks.pipe");
var to_month_string_pipe_1 = require("./pipes/to-month-string.pipe");
var FelixDatePickerModule = (function () {
    function FelixDatePickerModule() {
    }
    FelixDatePickerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                felix_date_picker_component_1.FelixDatePickerComponent,
                to_weekday_pipe_1.ToWeekdayPipe,
                split_by_weeks_pipe_1.SplitByWeeksPipe,
                to_month_string_pipe_1.ToMonthStringPipe
            ],
            exports: [felix_date_picker_component_1.FelixDatePickerComponent]
        })
    ], FelixDatePickerModule);
    return FelixDatePickerModule;
}());
exports.FelixDatePickerModule = FelixDatePickerModule;
