import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mealpipe'
})
export class MealpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
