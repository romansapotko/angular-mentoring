import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses!: Course[];
  searchCourse: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setCourses();
  }

  onDeleteCourse(courseId: number) {
    this.courses = this.courses.filter(c => c.id != courseId);
  }

  search(): void {
    console.log(this.searchCourse);
  }

  loadMore(): void {
    const index = this.courses.length + 1;

    this.courses.push({
      id: index,
      title: `Course ${index}`,
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
    });
  }

  trackBy(index: number, course: Course) {
    return course.id;
  }

  private setCourses(): void {
    this.courses = [
      {
        id: 1,
        title: 'Course 1',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
      },
      {
        id: 2,
        title: 'Course 2',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
      },
      {
        id: 3,
        title: 'Course 3',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
      },
      {
        id: 4,
        title: 'Course 4',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
      },
    ];
  }
}
