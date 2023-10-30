import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public signInForm!: FormGroup;
  public label: any = 'Sign In';
  public teachers!:any;
  public students!:any;


  constructor(private fb: FormBuilder, private router:Router) {
    this.createForm()
  }

  public createForm():void {
    this.signInForm = this.fb.group({
      userType: ['student', [Validators.required]],
      id: [null, [Validators.required]],
      password: ['',[Validators.required]]
    })
  }


  public onClick(event:any):void {
    this.teachers = JSON.parse(localStorage.getItem('teacher') || '')
    this.students = JSON.parse(localStorage.getItem('student') || '')
    console.log('teachers :>> ', this.teachers);

    if(this.signInForm.valid){
      const validTeacher = this.teachers.find((e:any)=> { return (e.id === this.signInForm.value.id) && (e.password === this.signInForm.value.password) })
      const validStudent = this.students.find((e:any)=> { return (e.id === this.signInForm.value.id) && (e.password === this.signInForm.value.password) })
      if(validTeacher || validStudent){
        console.log('validTeacher :>> ', validStudent);
        this.router.navigate([this.signInForm.value.userType],{
          queryParams:{id:this.signInForm.value.id}
        });
      }
    }
    
    // this.router.navigate(['student'])
    
  }
}
