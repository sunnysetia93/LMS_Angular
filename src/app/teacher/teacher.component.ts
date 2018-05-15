import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';
import { isUndefined } from 'util';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherList:any
  selectedId:number;
  teacher:Object;
  subjectList:any;
  subjectId:number;
  name:string;
  email:string;

  constructor(private api:ApiService) { 
    this.teacherList=[]
  }

  ngOnInit() {

    this.getTeachers();

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

  getTeachers()
  {
    this.api.getTeachers().subscribe(
      data=>{
        this.teacherList=data
        
      },
      err => {
          console.error(err)
          return Observable.throw(err);
      },
      () => console.log("data successfully fetched!")
    )
  }

  selectedTeacher(id)
  {
      this.teacherList.map((v)=>{
        if(v.id==id)
        {
            this.selectedId=id;
            this.teacher=v;
        }

        return v;
      })
  }

  add(){
      if(isUndefined(this.name) || isUndefined(this.email) || isUndefined(this.subjectId))
      {
          console.log("Enter values")
      }
      else{

          let teacher = {
            name:this.name,
            email:this.email,
            subjectId:this.subjectId
          }

          this.api.postTeacher(teacher).subscribe(
            data=>{
              this.getTeachers();    
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
