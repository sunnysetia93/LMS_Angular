import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';
import { isUndefined } from 'util';

@Component({
  selector: 'app-courseapp',
  templateUrl: './courseapp.component.html',
  styleUrls: ['./courseapp.component.css']
})
export class CourseappComponent implements OnInit {

  courseList:any
  selectedId:number;
  course:any;
  batchList:any
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getCourses();
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

  selectedCourse(id)
  {
      this.courseList.map((v)=>{
        if(v.id==id)
        {
            this.selectedId=id;
            this.api.getBatches(v.id).subscribe(
              (data:any)=>{
                this.batchList=data;
              }
            )
            this.course=v;
        }

        return v;
      })
  }

  addCourse(cname)
  {
    if(isUndefined(cname))
    {
        console.log("Enter values")
    }
    else
    {
      let course = {
        name:cname
      }
      this.api.postCourse(course).subscribe(
        data=>{
            this.getCourses();
        },
        err=>{
          return Observable.throw(err);          
        }
      )
    }
      
  }

}
