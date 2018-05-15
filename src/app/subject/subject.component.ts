import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';
import { isUndefined } from 'util';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectList:any
  selectedId:number;
  subject:any;
  courseList:any;
  courseId:number;
  name:string;
  constructor(private api:ApiService) {
    this.subjectList=[]
   }

  ngOnInit() {
    this.getSubjects();
    this.getCourses();
  }

  getSubjects(){
    this.api.getSubjects().subscribe(
      data=>{
        this.subjectList=data
      },
      err => {
          console.error(err)
          return Observable.throw(err);
      },
      () => console.log("data successfully fetched!")
    )
  }

  getCourses(){
    this.api.getCourses().subscribe(
      data=>{
        this.courseList=data
      },
      err => {
          console.error(err)
          return Observable.throw(err);
      },
      () => console.log("data successfully fetched!")
    )
  }

  selectedSubject(id)
  {
      this.subjectList.map((v)=>{
        if(v.id==id)
        {
            this.selectedId=id;
            this.api.getCourse(v.courseId).subscribe(
              (data:any)=>{
                v.courseName=data.name;
              }
            )
            this.subject=v;
        }

        return v;
      })
  }

  
  add(){
    if(isUndefined(this.name) || isUndefined(this.courseId))
      {
          console.log("Enter values")
      }
      else{

          let subject = {
            name:this.name,
            courseId:this.courseId
          }

          this.api.postSubject(subject).subscribe(
            data=>{
              this.getSubjects();    
            },
            err => {
              console.error(err)
              return Observable.throw(err);
          },
          () => console.log("Record Added!")
          )
      }
  }

}
