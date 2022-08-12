import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[], ...args: string[]): Course[] {
    return value.sort((x, y) => x.creationDate.getTime() - y.creationDate.getTime());
  }
}
