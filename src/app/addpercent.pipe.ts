import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addpercent'
})
export class AddpercentPipe implements PipeTransform {

  transform(value: any): unknown {
    return value+'%';
  }

}
