import { ApiService } from '../../../../shared/services/api.service';
import { Component } from '@angular/core';
import { StudentDetails } from '../../interface/teacher';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  public studentData: StudentDetails[] = [];
  constructor(private apiService: ApiService) {
    this.getStudentData();
  }

  getStudentData() {
    this.apiService.getStudentList().subscribe((res) => {
      this.studentData = [...this.studentData, res]
    })
    console.log('studentData :>> ', this.studentData);
  }
}
