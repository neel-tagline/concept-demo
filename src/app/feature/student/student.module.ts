import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
