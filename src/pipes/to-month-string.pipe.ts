import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'toMonthString'
})
export class ToMonthStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment().month(value).format("MMMM");
  }

}
