import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CalendarDay } from '../felix-date-picker-calendar-day.interface';
import { CalendarView } from '../felix-date-picker-calendar-view.interface';

const CSS_CLASS_NAME: string = 'ng-date-range-picker';
const DISPLAY_FORMAT: string = 'ddd, MMM Do';

@Component({
    selector: 'calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
})

export class CalendarViewComponent implements OnInit, OnChanges {
    @Input() range: boolean = true;
    @Input() dates = [];
    @Output() datesChange: EventEmitter<Date[]> = new EventEmitter();
    @Input() calendar;

    private editing = false;

    ngOnChanges() {
        this.updateDisplayValue()
    }

    ngOnInit() {
        this.updateCalendar(this.range ? this.dates[0] : this.dates[0]);
    }

    public goBack(count: any = 1, period: string = 'month') {
        const newStartDate = moment(this.calendar.startDate)
            .subtract(count, period).toDate();
        this.updateCalendar(newStartDate);
    }

    public goForward(count: any = 1, period: string = 'month') {
        const newStartDate = moment(this.calendar.startDate)
            .add(count, period).toDate();
        this.updateCalendar(newStartDate);
    }

    private getCalendarDay(date: Date) {
        let firstInRange: boolean = false;
        let lastInRange: boolean = false;
        let inRange: boolean = false;
        if (this.range) {
            firstInRange = moment(date).isSame(this.dates[0]);
            lastInRange = moment(date).isSame(this.dates[1]);
            inRange = firstInRange || lastInRange
                || moment(date).isBetween(this.dates[0], this.dates[1]);
        } else {
            firstInRange = moment(date).isSame(this.dates[0]);
            lastInRange = moment(date).isSame(this.dates[0]);
            inRange = moment(date).isSame(this.dates[0]);
        }
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

    public onDayClick(day: CalendarDay) {
        if (this.range) {
            if (!this.editing)  { this.dates[0] = day.date }
            else                { this.dates[1] = day.date }
        } else {
            this.dates = [day.date];
        }

        this.editing = !this.editing;
        this.validateDates();
        this.datesChange.emit(this.dates);
        this.updateCalendarDays();
        this.updateDisplayValue();
    }

    private validateDates() {
        if (this.range && this.dates[1] < this.dates[0]) {
            this.dates[0] = this.dates[1];
        }
    }

    public update() {
        this.updateCalendar();
    }

    private updateCalendar(date = this.dates[0]) {
        if( !this.calendar ) this.calendar = {} as CalendarView;
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

    private updateDisplayValue() {
        if( this.range ) {
            const startStr  = moment(this.dates[0]).format(DISPLAY_FORMAT);
            const endStr    = moment(this.dates[1]).format(DISPLAY_FORMAT);
            this.calendar.displayVal = `${startStr} - ${endStr}`;
        } else {
            this.calendar.displayVal = `${moment(this.dates[0]).format(DISPLAY_FORMAT)}`;
        }
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

    public getRootClass() {
        return CSS_CLASS_NAME;
    }

}
