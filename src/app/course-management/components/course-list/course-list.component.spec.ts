import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../../models/course';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let testCourses: Course[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testCourses = [
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init courses', () => {
    expect(component.courses).toEqual(testCourses);
  });

  it('should delete selected course', () => {
    const courseId = 2;
    const expectedCourses = testCourses.filter(c => c.id != courseId);

    component.onDeleteCourse(courseId);

    expect(component.courses).toEqual(expectedCourses);
  });

  it('should search course', () => {
    spyOn(console, 'log');
    component.searchCourse = 'test';
    component.search();

    expect(console.log).toHaveBeenCalledWith(component.searchCourse);
  });

  it('should add new course', () => {
    const index = testCourses.length + 1;
    const newCourse: Course = {
      id: index,
      title: `Course ${index}`,
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
    };

    const expectedCourses = [...testCourses, newCourse];
    component.loadMore();

    expect(component.courses).toEqual(expectedCourses);
  });

  afterEach(() => {
    fixture.detectChanges();
  });
});
