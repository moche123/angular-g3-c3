import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAge'
})
export class SortAgePipe implements PipeTransform {

  transform(array: any[], ...args: unknown[]): any {
    return array.sort( (a:any,b:any) => a.age-b.age  )
  }

}
