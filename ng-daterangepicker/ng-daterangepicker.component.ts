import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDay } from './ng-date-range-picker-calendar-day.interface';
import { CalendarView } from './ng-date-range-picker-calendar-view.interface';

const CSS_CLASS_NAME: string = 'ng-date-range-picker';

@Component({
  selector: 'app-ng-daterangepicker',
  templateUrl: './ng-daterangepicker.component.html',
  styleUrls: ['./ng-daterangepicker.component.scss']
})

export class NgDaterangepickerComponent implements OnInit {

  @Input() startDate: Date = new Date(Date.now());
  @Input() endDate:   Date = new Date(Date.now());

  @Output() startDateChange:  EventEmitter<Date> = new EventEmitter();
  @Output() endDateChange:    EventEmitter<Date> = new EventEmitter();

  private _startDate: Date = new Date();
  private _endDate:   Date = new Date();
  private editing: boolean = false;

  public open: boolean = false;
  public calendar: CalendarView = {} as CalendarView;

  public resetCalendar() {

    // console.log(this._startDate, this.startDate);
  }

  public onCancelClick() {
    this.resetDates();
    this.updateCalendar();
  }

  public onApplyClick() {
    this.updateInitialDates();
    this.publishUpdates();
    this.open = false;
  }

  public ngOnInit() {
    this.startDate = moment(this.startDate).startOf('day').toDate();
    this.endDate = moment(this.startDate).startOf('day').toDate();
    this.updateInitialDates();
    this.updateCalendar(this.endDate);
  }

  public onDayClick(day: CalendarDay) {
    if (!this.editing && day.date < this.endDate) {
      this.startDate = day.date;
      this.editing = true;
    } else {
      this.endDate = day.date;
      this.editing = false;
    }
    if (this.endDate < this.startDate) {
      this.endDate = this.startDate;
    }
    this.updateCalendarDays();
    this.updateDisplayValue();
  }

  public onCalendarBack() {
    const newStart = moment(this.calendar.startDate)
      .subtract(1, 'month').toDate();
    this.updateCalendar(newStart);
  }

  public onCalendarForward() {
    const newStart = moment(this.calendar.startDate)
      .add(1, 'month').toDate();
    this.updateCalendar(newStart);
  }

  public getRootClass() {
    return CSS_CLASS_NAME;
  }

  public getDayCellClass(day: CalendarDay) {
    return {
      'in-range': day.inRange,
      'first-in-range': day.firstInRange,
      'last-in-range': day.lastInRange,
      'only-selected': day.firstInRange && day.lastInRange,
      'last-month': day.month < this.calendar.month,
      'next-month': day.month > this.calendar.month,
    };
  }

  private updateCalendar(date = this.endDate) {
    // set calendar params
    this.calendar.month = moment(date).month();
    this.calendar.year  = moment(date).year();
    // set start and end dates
    this.calendar.startDate = moment(date).startOf('month').toDate();
    this.calendar.endDate   = moment(date).endOf('month').toDate();
    // update display string
    this.updateDisplayValue();
    this.updateCalendarDays();
  }

  private updateCalendarDays() {
    // include additional days to fill weeks
    const endDate = moment(this.calendar.endDate)
      .add(6 - this.calendar.endDate.getDay(), 'days').toDate();

    let date = moment(this.calendar.startDate)
      .subtract(this.calendar.startDate.getDay(), 'days').toDate();

    this.calendar.days = [];
    while (date < endDate) {
      this.calendar.days.push(this.getCalendarDay(date));
      date = moment(date).add(1, 'day').toDate();
    }
  }

  private getCalendarDay(date: Date) {
    const firstInRange = moment(date).isSame(this.startDate);
    const lastInRange = moment(date).isSame(this.endDate);
    const inRange = firstInRange || lastInRange
      || moment(date).isBetween(this.startDate, this.endDate);
    return {
      date:         date,
      dayOfMonth:   date.getDate(),
      month:        date.getMonth(),
      year:         date.getFullYear(),
      dayOfWeek:    date.getDay(),
      firstInRange: firstInRange,
      lastInRange:  lastInRange,
      inRange:      inRange
    } as CalendarDay;
  }

  private updateDisplayValue() {
    const startStr = moment(this.startDate).format('ddd, MMM Do');
    const endStr = moment(this.endDate).format('ddd, MMM Do');
    this.calendar.displayVal = `${startStr} - ${endStr}`;
  }

  private updateInitialDates() {
    this._startDate = new Date(moment(this.startDate).toDate());
    this._endDate   = new Date(moment(this.endDate).toDate());
  }

  private resetDates() {
    this.startDate  = new Date(moment(this._startDate).toDate());
    this.endDate    = new Date(moment(this._endDate).toDate());
  }

  private publishUpdates() {
    this.startDateChange.emit(this.startDate);
    this.endDateChange.emit(this.endDate);
  }

}
