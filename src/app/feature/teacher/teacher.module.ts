import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TeacherProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
