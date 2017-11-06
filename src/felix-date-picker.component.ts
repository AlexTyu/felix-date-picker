import * as moment from 'moment';
import { ElementRef, Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnChanges } from '@angular/core';
import { FelixDatePickerViewComponent } from './felix-date-picker-view.component';
import { FelixDatePickerInterface } from './felix-date-picker.interface'
const CSS_CLASS_NAME: string = 'ng-date-range-picker';

@Component({
  selector: 'fx-date-picker, input[fx-date-picker]',
  templateUrl: './felix-date-picker.component.html',
  styleUrls: ['./felix-date-picker.component.scss'],
  encapsulation : ViewEncapsulation.None
})

export class FelixDatePickerComponent
extends FelixDatePickerViewComponent
implements OnInit, OnChanges, FelixDatePickerInterface {

  @Input()  date: Date = new Date(Date.now());
  @Output() dateChange: EventEmitter<Date> = new EventEmitter();

  constructor(elementRef: ElementRef) {
    super(elementRef);

  }

  ngOnChanges() {
    if( this.dates ) {
      this.dates = [new Date(moment(this.date).toDate())];
      this.updateView();
    } else {
      this.dates = [new Date(Date.now())];
    }
  }

  public ngOnInit() {
    super.init();
    this.range = false;
    this.date = moment(this.date).startOf('day').toDate();
    this.dates = [new Date(moment(this.date).toDate())];
  }

  public onCancel() {
    this.dates[0] = new Date(moment(this.date).toDate());
    this.calendarView.update();
    this.closeMenu();
  }

  public onApply() {
    this.date = this.dates[0];
    this.dateChange.emit(this.date);
    this.closeMenu();
  }

}
