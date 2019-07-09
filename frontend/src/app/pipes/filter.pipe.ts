    
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultExternals = [];
    for (const external of value) {
      if (external.reason.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultExternals.push(external);
      };
    };
    return resultExternals;
  }

}