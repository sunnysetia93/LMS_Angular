import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  batches : any;
  constructor(private api:ApiService) {  this.batches = []}

  ngOnInit() {
    this.api.getAllBatches().subscribe(
      (data:any)=>{
          this.batches = data.filter((v)=>{
              return v.startYear>2018
          })
      }
    )
  }

}
