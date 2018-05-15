import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  @Input() lectures
  @Input() students:any
  @Input() subjects
  @Input() batchId
  @Input() courseId
  subjectList:any
  subjectId:number
  studentId:number
  filteredStudents:any
  constructor(private api:ApiService) { 

  }

  ngOnInit() {
      this.api.getStudents().subscribe(
        data=>{
              this.filteredStudents = data
          });

  }

  addLecture()
  {
     let lecture = {
       subjectId:this.subjectId,
       batchId:this.batchId,
       courseId:this.courseId
     }
    
     this.api.postLecture(lecture).subscribe(
       data=>{
         console.log(data)
          this.api.getLectures(this.courseId,this.batchId).subscribe(
            data=>{
              console.log(data)
              this.lectures=data
            }
          )
       }
     )
  }

  enrollStudent()
  {
      let stud = {
        batchId:this.batchId,
        studentId:this.studentId
      }
      this.api.enrollStudent(stud).subscribe(
        data=>{
          console.log(data);
          this.api.getStudentsForBatch(this.courseId,this.batchId).subscribe(
            (data:any)=>{
              // console.log("students",data.students)
              this.students=data.students
            }
          )
        }
      )
  }

}
