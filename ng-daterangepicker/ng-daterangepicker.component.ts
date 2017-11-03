import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { CalendarDay } from './ng-date-range-picker-calendar-day.interface';
import { CalendarView } from './ng-date-range-picker-calendar-view.interface';

@Component({
  selector: 'app-ng-daterangepicker',
  templateUrl: './ng-daterangepicker.component.html',
  styleUrls: ['./ng-daterangepicker.component.scss']
})


export class NgDaterangepickerComponent implements OnInit {

  @Input() startDate: Date = new Date('2017/10/05');
  @Input() endDate: Date = new Date('2017/10/15');

  editing = false;
  calendar: CalendarView = {} as CalendarView;
  cssClassName: string = 'ng-date-range-picker';

  constructor() {
  }


  ngOnInit() {
    this.updateCalendar();
  }

  private updateCalendar(date = this.endDate) {
    // set calendar params
    this.calendar.month = moment(date).month();
    this.calendar.year = moment(date).year();

    // set start and end dates
    this.calendar.startDate = moment(date).startOf('month').toDate();
    this.calendar.endDate = moment(date).endOf('month').toDate();
    // update display string
    this.updateDisplayValue();
    this.updateCalendarDays();
  }

  private updateCalendarDays() {
    // include additional days to fill weeks
    let startDate = moment(this.calendar.startDate)
      .subtract(this.calendar.startDate.getDay(), 'days').toDate();
    const endDate = moment(this.calendar.endDate)
      .add(6 - this.calendar.endDate.getDay(), 'days').toDate();
    this.calendar.days = [];
    while (startDate < endDate) {
      this.calendar.days.push({
        date: startDate,
        dayOfMonth: startDate.getDate(),
        month: startDate.getMonth(),
        year: startDate.getFullYear(),
        dayOfWeek: startDate.getDay(),
        firstInRange: moment(startDate).isSame(this.startDate),
        lastInRange: moment(startDate).isSame(this.endDate),
        inRange: startDate >= this.startDate && startDate <= this.endDate
      } as CalendarDay);
      startDate = moment(startDate).add(1, 'day').toDate();
    }
  }

  private updateDisplayValue() {
    const startStr = moment(this.startDate).format('ddd, MMM Do');
    const endStr = moment(this.endDate).format('ddd, MMM Do');
    this.calendar.displayVal = `${startStr} - ${endStr}`;
  }

  public onDayClick(day: CalendarDay) {
    if (!this.editing) {
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
    const newStart = moment(this.calendar.startDate).subtract(1, 'month').toDate();
    this.updateCalendar(newStart);
  }

  public onCalendarForward() {
    const newStart = moment(this.calendar.startDate).add(1, 'month').toDate();
    this.updateCalendar(newStart);
  }

  public getDayCellClass(day: CalendarDay) {
    return {
      'in-range': day.inRange,
      'first-in-range': day.firstInRange,
      'last-in-range': day.lastInRange,
      'last-month': day.month < this.calendar.month,
      'next-month': day.month > this.calendar.month
    };
  }

}
