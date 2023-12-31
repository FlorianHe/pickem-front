import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToUnderscore'
})
export class SpaceToUnderscorePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ', '_');
  }

}
