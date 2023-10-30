import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public label = "Sign Up"
  public userForm!: FormGroup;
  public teacherList!: any;
  public teacherExistErr: boolean = false;
  public studentExistErr: boolean = false;
  public success: boolean = false;

  constructor(private fb: FormBuilder) {
  }
  
  public ngOnInit():void{
    this.createForm();

  }

  

  public createForm():void {
    this.userForm = this.fb.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required]],
      age: [null, [Validators.required]],
      email: [''],
      password:['', [Validators.required]],
      confirmPassword:['', [Validators.required]],
      userType: ['student']
    })
  }

  public onClick(event: any): void {
    console.log('On click', event);
    this.onSubmit();
  }

  public onSubmit(): void {
    if (this.userForm.valid && this.userForm.value.password === this.userForm.value.confirmPassword) {
      console.log('this.userForm.value :>> ', this.userForm.value);
      if (this.userForm.value.userType === 'teacher') {
        const teacheres: any = JSON.parse(localStorage.getItem('teacher') as any) || []
        console.log('teacheres :>> ', teacheres);
        const teacherExist = teacheres.find((e: any) => {return e.id === this.userForm.value.id})
        console.log('teacherExist :>> ', teacherExist);
        if (!teacherExist) {
          this.teacherExistErr = false;
          teacheres.push(this.userForm.value)
          localStorage.setItem('teacher', JSON.stringify(teacheres));
          this.success = true;
          setTimeout(()=>{
            this.success = false;
          },3000)
          this.userForm.reset()
        }
        else {
          this.teacherExistErr = true;
        }
      }
      else {
        const students: any = JSON.parse(localStorage.getItem('student') as any) || []
        const studentExist = students.find((e: any) => {return e.id === this.userForm.value.id})
        if (!studentExist) {
          this.studentExistErr = false;
          students.push(this.userForm.value)
          localStorage.setItem('student', JSON.stringify(students));
          this.success = true;
          setTimeout(()=>{
            this.success = false;
          },3000)
          this.userForm.reset()
        }
        else {
          this.studentExistErr = true;
        }
      }
    }
  }
}
