import { Pipe, PipeTransform } from '@angular/core';
import { chunk } from 'lodash';

@Pipe({
  name: 'splitByWeeks'
})
export class SplitByWeeksPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return chunk(value, 7);
  }

}
