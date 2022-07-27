import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../../models/course';

import { CourseComponent } from './course.component';

describe('CourseListComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const mockCourse: Course = {
    id: 1,
    title: 'Course 1',
    description:
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course  find course descriptions, what information they include, how they work, and details about various components of a course description. Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. ',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete course', () => {
    spyOn(component.deleteCourse, 'emit');

    component.delete();

    expect(component.deleteCourse.emit).toHaveBeenCalled();
  });
});
