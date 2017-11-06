import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarViewComponent } from './src/calendar-view/calendar-view.component';

import { FelixDatePickerComponent } from './src/felix-date-picker.component';
import { FelixDateRangePickerComponent } from './src/felix-date-range-picker.component';
import { ToWeekdayPipe } from './src/pipes/to-weekday.pipe';
import { SplitByWeeksPipe } from './src/pipes/split-by-weeks.pipe';
import { ToMonthStringPipe } from './src/pipes/to-month-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FelixDatePickerComponent,
    FelixDateRangePickerComponent,
    ToWeekdayPipe,
    SplitByWeeksPipe,
    ToMonthStringPipe,
    CalendarViewComponent
  ],
  exports: [FelixDatePickerComponent, FelixDateRangePickerComponent]
})
export class FelixDatePickerModule { }
