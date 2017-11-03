import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toWeekday'
})
export class ToWeekdayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment().isoWeekday(value).format("dd");
  }

}
