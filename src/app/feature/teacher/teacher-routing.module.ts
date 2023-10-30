import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'profile',
    component:TeacherProfileComponent
  },
  {
    path:'student-details',
    component:StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
