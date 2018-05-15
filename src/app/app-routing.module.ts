import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseappComponent} from './courseapp/courseapp.component'
import {StudentComponent} from './student/student.component'
import {TeacherComponent} from './teacher/teacher.component'
import {SubjectComponent} from './subject/subject.component'
import {DashboardComponent} from './dashboard/dashboard.component'


import {AppComponent} from './app.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },  
  { path: 'courses', component: CourseappComponent },
  { path: 'students', component: StudentComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'dashboard', component: DashboardComponent }  
  
];

@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
