import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDaterangepickerComponent } from './ng-daterangepicker/ng-daterangepicker.component';
import { ToWeekdayPipe } from './to-weekday.pipe';
import { SplitByWeeksPipe } from './split-by-weeks.pipe';
import { ToMonthStringPipe } from './to-month-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgDaterangepickerComponent, ToWeekdayPipe, SplitByWeeksPipe, ToMonthStringPipe],
  exports: [NgDaterangepickerComponent]
})
export class NgDaterangepickerModule { }
