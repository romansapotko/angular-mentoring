import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course!: Course;

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log('Course: onInit');
  }

  delete(): void {
    this.deleteCourse.emit(this.course.id);
    console.log(this.course.id);
  }
}
