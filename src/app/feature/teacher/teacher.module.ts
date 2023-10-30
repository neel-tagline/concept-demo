import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TeacherProfileComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
