import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Course[], ...args: string[]): Course[] {
    return value.filter(c => c.title.includes(args[0]));
  }
}
