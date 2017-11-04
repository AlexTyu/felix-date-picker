"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var moment = require("moment");
var core_1 = require("@angular/core");
var CSS_CLASS_NAME = 'ng-date-range-picker';
var DISPLAY_FORMAT = 'ddd, MMM Do';
var FelixDatePickerComponent = (function () {
    function FelixDatePickerComponent() {
        this.startDate = new Date(Date.now());
        this.endDate = new Date(Date.now());
        this.startDateChange = new core_1.EventEmitter();
        this.endDateChange = new core_1.EventEmitter();
        this._startDate = new Date();
        this._endDate = new Date();
        this.editing = false;
        this.range = false;
        this.open = false;
        this.calendar = {};
    }
    FelixDatePickerComponent.prototype.resetCalendar = function () {
        // console.log(this._startDate, this.startDate);
    };
    FelixDatePickerComponent.prototype.onCancelClick = function () {
        this.resetDates();
        this.updateCalendar();
    };
    FelixDatePickerComponent.prototype.onApplyClick = function () {
        this.updateInitialDates();
        this.publishUpdates();
        this.open = false;
    };
    FelixDatePickerComponent.prototype.ngOnInit = function () {
        this.startDate = moment(this.startDate).startOf('day').toDate();
        this.endDate = moment(this.startDate).startOf('day').toDate();
        this.updateInitialDates();
        this.updateCalendar(this.endDate);
    };
    FelixDatePickerComponent.prototype.onDayClick = function (day) {
        if (!this.editing) {
            this.startDate = day.date;
            this.editing = true;
        }
        else {
            this.endDate = day.date;
            this.editing = false;
        }
        if (this.endDate < this.startDate) {
            this.endDate = this.startDate;
        }
        this.updateCalendarDays();
        this.updateDisplayValue();
    };
    FelixDatePickerComponent.prototype.onDayMouseOver = function (day, event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.editing) {
            return false;
        }
        if (day.date <= this.startDate) {
        }
        else {
            this.endDate = day.date;
        }
        this.updateCalendarDays();
    };
    FelixDatePickerComponent.prototype.onCalendarBack = function () {
        var newStart = moment(this.calendar.startDate)
            .subtract(1, 'month').toDate();
        this.updateCalendar(newStart);
    };
    FelixDatePickerComponent.prototype.onCalendarForward = function () {
        var newStart = moment(this.calendar.startDate)
            .add(1, 'month').toDate();
        this.updateCalendar(newStart);
    };
    FelixDatePickerComponent.prototype.getRootClass = function () {
        return CSS_CLASS_NAME;
    };
    FelixDatePickerComponent.prototype.getDayCellClass = function (day) {
        return {
            'in-range': day.inRange,
            'first-in-range': day.firstInRange,
            'last-in-range': day.lastInRange,
            'only-selected': day.firstInRange && day.lastInRange,
            'last-month': day.month < this.calendar.month,
            'next-month': day.month > this.calendar.month
        };
    };
    FelixDatePickerComponent.prototype.updateCalendar = function (date) {
        if (date === void 0) { date = this.endDate; }
        // set calendar params
        this.calendar.month = moment(date).month();
        this.calendar.year = moment(date).year();
        // set start and end dates
        this.calendar.startDate = moment(date).startOf('month').toDate();
        this.calendar.endDate = moment(date).endOf('month').toDate();
        // update display string
        this.updateDisplayValue();
        this.updateCalendarDays();
    };
    FelixDatePickerComponent.prototype.updateCalendarDays = function () {
        // include additional days to fill weeks
        var endDate = moment(this.calendar.endDate)
            .add(6 - this.calendar.endDate.getDay(), 'days').toDate();
        var date = moment(this.calendar.startDate)
            .subtract(this.calendar.startDate.getDay(), 'days').toDate();
        this.calendar.days = [];
        while (date < endDate) {
            this.calendar.days.push(this.getCalendarDay(date));
            date = moment(date).add(1, 'day').toDate();
        }
    };
    FelixDatePickerComponent.prototype.getCalendarDay = function (date) {
        var firstInRange = moment(date).isSame(this.startDate);
        var lastInRange = moment(date).isSame(this.endDate);
        var inRange = firstInRange || lastInRange
            || moment(date).isBetween(this.startDate, this.endDate);
        return {
            date: date,
            dayOfMonth: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            dayOfWeek: date.getDay(),
            firstInRange: firstInRange,
            lastInRange: lastInRange,
            inRange: inRange
        };
    };
    FelixDatePickerComponent.prototype.updateDisplayValue = function () {
        var startStr = moment(this.startDate).format(DISPLAY_FORMAT);
        var endStr = moment(this.endDate).format(DISPLAY_FORMAT);
        this.calendar.displayVal = startStr + " - " + endStr;
    };
    FelixDatePickerComponent.prototype.updateInitialDates = function () {
        this._startDate = new Date(moment(this.startDate).toDate());
        this._endDate = new Date(moment(this.endDate).toDate());
    };
    FelixDatePickerComponent.prototype.resetDates = function () {
        this.startDate = new Date(moment(this._startDate).toDate());
        this.endDate = new Date(moment(this._endDate).toDate());
    };
    FelixDatePickerComponent.prototype.publishUpdates = function () {
        this.startDateChange.emit(this.startDate);
        this.endDateChange.emit(this.endDate);
    };
    __decorate([
        core_1.Input()
    ], FelixDatePickerComponent.prototype, "startDate");
    __decorate([
        core_1.Input()
    ], FelixDatePickerComponent.prototype, "endDate");
    __decorate([
        core_1.Output()
    ], FelixDatePickerComponent.prototype, "startDateChange");
    __decorate([
        core_1.Output()
    ], FelixDatePickerComponent.prototype, "endDateChange");
    FelixDatePickerComponent = __decorate([
        core_1.Component({
            selector: 'fx-date-picker',
            templateUrl: './felix-date-picker.component.html',
            styleUrls: ['./felix-date-picker.component.scss']
        })
    ], FelixDatePickerComponent);
    return FelixDatePickerComponent;
}());
exports.FelixDatePickerComponent = FelixDatePickerComponent;
