import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(person: Person): string {
    if (!person) {
      return '';
    }
    return `${person.FirstName.substring(0, 1)}${person.LastName.substring(0, 1)}`;
  }

}
