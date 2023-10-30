import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfileComponent } from '../student-profile/student-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public name!:string;
  public studentList!:any;
  public student!:any;


  constructor(private route:ActivatedRoute, private modalService: NgbModal){
    this.getName();
  }

  public getName():void{
    this.studentList = JSON.parse(localStorage.getItem('student') || '')
    this.route.queryParams.subscribe((res)=>{
      console.log('res :>> ', res['id']);
      this.student = this.studentList.find((e:any)=>e.id == res['id'])
    })

  }

  public open():void {
		const modalRef = this.modalService.open(StudentProfileComponent);
		modalRef.componentInstance.name = 'World';
	}

}
