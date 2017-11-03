import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { chunk } from 'lodash';

interface CalendarDay {
  date:       Date;
  dayOfMonth: number;
  month:      number;
  year:       number;
  dayOfWeek:  number;
  inRange:    boolean;
  firstInRange: boolean;
  lastInRange: boolean;
  inCurrentMonth: boolean;
}

interface CalendarView {
  startDate:  Date,
  endDate:    Date,
  days:     CalendarDay[];
  month:    number;
  year:     number;
}

const Calendar: CalendarView = {
  startDate: new Date(),
  endDate: new Date(),
  days:   [],
  month:  0,
  year:   2017
};

@Component({

  selector: 'app-ng-daterangepicker',
  templateUrl: './ng-daterangepicker.component.html',
  styleUrls: ['./ng-daterangepicker.component.css']
})
export class NgDaterangepickerComponent implements OnInit {

  @Input() startDate: Date = new Date("2017/10/05");
  @Input() endDate: Date = new Date("2017/10/15");

  constructor() {
  }

  editing = false;
  calendar: CalendarView = Calendar;

  ngOnInit() {
    this.updateCalendar();
  }

  private updateCalendar(date = this.endDate) {
    // set calendar params
    this.calendar.month = moment(date).month();
    this.calendar.year = moment(date).year();

    // set start and end dates
    this.calendar.startDate = moment(date).startOf("month").toDate();
    this.calendar.endDate = moment(date).endOf("month").toDate();

    this.updateCalendarDays();
  }

  private updateCalendarDays() {
    // include additional days to fill weeks
    let start = moment(this.calendar.startDate)
      .subtract(this.calendar.startDate.getDay(), "days").toDate();
    let end = moment(this.calendar.endDate)
      .add(6 - this.calendar.endDate.getDay(), "days").toDate();
    this.calendar.days = [];
    while( start < end ) {
      this.calendar.days.push({
        date: start,
        dayOfMonth: start.getDate(),
        month: start.getMonth(),
        year: start.getFullYear(),
        dayOfWeek: start.getDay(),
        firstInRange: moment(start).isSame(this.startDate),
        lastInRange: moment(start).isSame(this.endDate),
        inRange: start >= this.startDate && start <= this.endDate
      } as CalendarDay);
      start = moment(start).add(1, "day").toDate()
    }
  }

  public onDayClick(day: CalendarDay) {
    if( !this.editing ) {
      this.startDate = day.date;
      this.editing = true;
    } else {
      this.endDate = day.date;
      this.editing = false;
    }
    if( this.endDate < this.startDate ) {
      this.endDate = this.startDate
    }
    this.updateCalendarDays();
  }

  public onCalendarBack() {
    let newStart = moment(this.calendar.startDate).subtract(1, "month").toDate();
    this.updateCalendar(newStart);
  }

  public onCalendarForward() {
    let newStart = moment(this.calendar.startDate).add(1, "month").toDate();
    this.updateCalendar(newStart);
  }

}
