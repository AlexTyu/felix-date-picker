import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FelixDatePickerComponent } from './src/felix-date-picker.component';
import { ToWeekdayPipe } from './src/pipes/to-weekday.pipe';
import { SplitByWeeksPipe } from './src/pipes/split-by-weeks.pipe';
import { ToMonthStringPipe } from './src/pipes/to-month-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FelixDatePickerComponent,
    ToWeekdayPipe,
    SplitByWeeksPipe,
    ToMonthStringPipe
  ],
  exports: [FelixDatePickerComponent]
})
export class FelixDatePickerModule { }
