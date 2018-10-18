import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, field: string): any {
    value.sort((prev, next) => {
      return prev[field] > next[field];
    });
    return value;
  }
}
