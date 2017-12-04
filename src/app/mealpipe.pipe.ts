import { Pipe, PipeTransform } from '@angular/core';
import { Details } from './details';

@Pipe({
  name: 'mealpipe',
  pure: false
})
export class MealpipePipe implements PipeTransform {

  transform(input: Details[], calorieCount) {
    const output: Details[] = [];
    if (calorieCount === 'under500')  {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    }else if (calorieCount === 'over500')  {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
    return input;
    }
  }

}
