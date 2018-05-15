import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  BASE_URL= "https://ancient-brushlands-37196.herokuapp.com/";

  constructor(private http:HttpClient) { }

  getStudents(){

    return this.http.get(this.BASE_URL+"students")
  }

  getTeachers(){

    return this.http.get(this.BASE_URL+"teachers")
  }
  getSubjects(){

    return this.http.get(this.BASE_URL+"subjects")
  }
  getCourses(){

    return this.http.get(this.BASE_URL+"courses")
  }
  getCourse(id){

    return this.http.get(this.BASE_URL+"courses/"+id)
  }
  getBatches(courseId){
    return this.http.get(this.BASE_URL+"courses/"+courseId+"/batches")
  }
  getLectures(courseId,batchId){

    return this.http.get(this.BASE_URL+"courses/"+courseId+"/batches/"+batchId+"/lectures")    
  }
  getStudentsForBatch(courseId,batchId){

    return this.http.get(this.BASE_URL+"courses/"+courseId+"/batches/"+batchId+"/students")    
  }
  getSubjectCourse(courseId){
    return this.http.get(this.BASE_URL+"courses/"+courseId+"/subjects")
  }
  getAllBatches(){
    return this.http.get(this.BASE_URL+"batches")
  }
  postStudent(student){
    let body = JSON.stringify(student)
    return this.http.post(this.BASE_URL+"students",body,httpOptions)
  }
  postTeacher(teacher){
    let body = JSON.stringify(teacher)
    return this.http.post(this.BASE_URL+"teachers",body,httpOptions)
  }
  postSubject(subject){
    let body = JSON.stringify(subject)
    return this.http.post(this.BASE_URL+"subjects",body,httpOptions)
  }

  postCourse(course){
    let body = JSON.stringify(course)
    return this.http.post(this.BASE_URL+"courses",body,httpOptions)
  }

  postBatch(batch){
    let body = JSON.stringify(batch);
    return this.http.post(this.BASE_URL+"courses/"+batch.courseId+"/batches",body,httpOptions)
  }
  postLecture(lecture){
    let body = JSON.stringify(lecture);
    return this.http.post(this.BASE_URL+"courses/"+lecture.courseId+"/batches/"+lecture.batchId+"/lectures",body,httpOptions)
  }
  enrollStudent(student){
    let body = JSON.stringify(student);
    return this.http.post(this.BASE_URL+"students/enroll",body,httpOptions)
  }
}
