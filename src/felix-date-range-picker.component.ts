import * as moment from 'moment';
import { ElementRef, Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FelixDatePickerViewComponent } from './felix-date-picker-view.component';
import { FelixDatePickerInterface } from './felix-date-picker.interface'
const CSS_CLASS_NAME: string = 'ng-date-range-picker';

@Component({
    selector: 'fx-date-range-picker, , input[fx-date-range-picker]',
    templateUrl: './felix-date-picker.component.html',
    styleUrls: ['./felix-date-picker.component.scss'],
})

export class FelixDateRangePickerComponent
extends FelixDatePickerViewComponent
implements OnInit, OnChanges, FelixDatePickerInterface {

    @Input() startDate: Date = new Date(Date.now());
    @Input() endDate:   Date = new Date(Date.now());
    @Output() startDateChange:  EventEmitter<Date> = new EventEmitter();
    @Output() endDateChange:    EventEmitter<Date> = new EventEmitter();

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }

    ngOnChanges() {
        this.dates = [new Date(moment(this.startDate).toDate()), new Date(moment(this.endDate).toDate())]
        this.updateView();
    }

    public ngOnInit() {
        super.init();
        this.range = true;
        this.startDate = moment(this.startDate).startOf('day').toDate();
        this.endDate = moment(this.endDate).startOf('day').toDate();
        this.dates = [moment(this.startDate).toDate(), moment(this.endDate).toDate()];
    }

    public onCancel() {
        this.dates[0] = new Date(moment(this.startDate).toDate());
        this.dates[1] = new Date(moment(this.endDate).toDate());
        this.calendarView.update();
        this.closeMenu();
    }

    public onApply() {
        this.startDate = this.dates[0];
        this.endDate = this.dates[1];
        this.startDateChange.emit(this.startDate);
        this.endDateChange.emit(this.endDate);
        this.closeMenu();
    }

    public getRootClass() {
        return CSS_CLASS_NAME;
    }

}
