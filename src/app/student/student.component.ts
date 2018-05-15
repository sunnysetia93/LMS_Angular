import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-students',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList:any
  name:string;
  age:number;
  email:string;
  selectedId:number;
  selectedName:string;

  constructor(private api:ApiService) { 
    this.studentList=[]
  }

  ngOnInit() {
      this.getStudents();
  }

  selectedStudent(id,name){
      this.selectedId=id;
      this.selectedName=name;
      
  }

  getStudents(){
    this.api.getStudents().subscribe(
      data=>{
        this.studentList=data
        
      },
      err => {
          console.error(err)
          return Observable.throw(err);
      },
      () => console.log("data successfully fetched!")
    )
  }

  add(){
    let student = {
      name:this.name,
      age:this.age,
      email:this.email
    }

    this.api.postStudent(student).subscribe(
      data=>{
        this.getStudents();
      },
      err => {
          console.error(err)
          return Observable.throw(err);
      },
      () => console.log("Record Added!")
    )
  }


}
