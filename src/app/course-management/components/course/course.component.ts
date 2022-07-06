import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  // public form!: FormGroup;

  // @Input() set course(value: Course) {
  //   if(value)
  //   {
  //     this.form.setValue(value);
  //   }
  // };

  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
    // this.buildFormGroup();
  }

  // private buildFormGroup(): void {
  //   this.form = new FormGroup({
  //     userName: new FormControl(),
  //     userEmail: new FormControl()
  //   });
  // }

}
