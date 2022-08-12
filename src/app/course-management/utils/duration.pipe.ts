import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const hours = Math.floor(value / 60);
    const minutes: number = value - hours * 60;

    return (hours ? hours + ' h ' : '') + (minutes ? minutes + ' min' : '');
  }
}
