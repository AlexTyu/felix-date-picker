import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgDaterangepickerComponent } from './ng-daterangepicker.component';
import { ToWeekdayPipe } from './pipes/to-weekday.pipe';
import { SplitByWeeksPipe } from './pipes/split-by-weeks.pipe';
import { ToMonthStringPipe } from './pipes/to-month-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgDaterangepickerComponent,
    ToWeekdayPipe,
    SplitByWeeksPipe,
    ToMonthStringPipe
  ],
  exports: [NgDaterangepickerComponent]
})
export class NgDaterangepickerModule { }
