import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-management/components/course-list/course-list.component';
import { CourseComponent } from './course-management/components/course/course.component';

const routes: Routes = [
  { path: "", component: CourseListComponent},
  { path: "courses", component: CourseListComponent},
  { path: "course", component: CourseComponent},
  { path: "course/:id", component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
