import { Directive, ElementRef, Input } from '@angular/core';
import { BorderColor } from './border-color';

@Directive({
  selector: '[appCreationDate]',
})
export class CreationDateDirective {
  private currentDate = new Date();
  private twoWeeksInMilliseconds = 14 * 24 * 60 * 60 * 1000;
  private twoWeeksAgo = new Date(this.currentDate.getTime() - this.twoWeeksInMilliseconds);

  constructor(private el: ElementRef) {}

  @Input() set appCreationDate(value: Date | undefined) {
    if (value) {
      this.highlight(value);
    }
  }

  highlight(creationDate: Date) {
    if (creationDate < this.currentDate && creationDate >= this.twoWeeksAgo) {
      this.el.nativeElement.style.color = BorderColor.Green;
    } else if (creationDate > this.currentDate) {
      this.el.nativeElement.style.color = BorderColor.Blue;
    }
  }
}
