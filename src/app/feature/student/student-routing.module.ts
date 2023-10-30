import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path:'profile',
        component: StudentProfileComponent        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule { }

