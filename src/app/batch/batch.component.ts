import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';
import { isUndefined } from 'util';
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  @Input() batches
  @Input() courseId
  @Input() courseName  
  selectedId:number
  batch:any
  studentList:any
  lectureList:any
  subjectList:any
  constructor(private api:ApiService) { 
  }

  ngOnInit() {
    
  }
  selectedBatch(id){
    this.batches.map((v)=>{
      if(v.id==id)
      {
          this.selectedId=id;
          this.batch=v;

          this.api.getLectures(this.courseId,id).subscribe(
            data=>{
              this.lectureList=data
              
            }
          )
          this.api.getStudentsForBatch(this.courseId,id).subscribe(
            (data:any)=>{
              // console.log("students",data.students)
              this.studentList=data.students
            }
          )
          this.api.getSubjectCourse(this.courseId).subscribe(
            data=>{
              this.subjectList=data
            }
          )
      }

      return v;
    })
  }

  addBatch(bname,byear)
  {
    if(isUndefined(bname) || isUndefined(byear))
    {
        console.log("Enter values")
    }
    else
    {
      let batch = {
        name:bname,
        startYear:byear,
        courseId:this.courseId
      }
      this.api.postBatch(batch).subscribe(
        data=>{
            console.log(data);
        },
        err=>{
          return Observable.throw(err);          
        }
      )
    }
  }
}
