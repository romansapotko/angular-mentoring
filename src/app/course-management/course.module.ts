import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing.module';
import { CreationDateDirective } from './utils/creation-date.directive';
import { DurationPipe } from './utils/duration.pipe';

@NgModule({
  declarations: [CourseListComponent, CourseComponent, CreationDateDirective, DurationPipe],
  imports: [CommonModule, FormsModule, CourseRoutingModule],
})
export class CourseModule {}
