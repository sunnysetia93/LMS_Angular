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
  batches:any
  batchId:number;
  error:string;

  constructor(private api:ApiService) { 
    this.studentList=[]
  }

  ngOnInit() {
      this.getStudents();
      this.getBatches();
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

  getBatches(){
    this.api.getAllBatches().subscribe(
      data=>{
        this.batches = data
      }
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

  enroll(){
    let stud = {
      batchId:this.batchId,
      studentId:this.selectedId
    }
    this.api.enrollStudent(stud).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        this.error="User already present in this batch ";
      }
    )
  }

}
