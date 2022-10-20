import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  finaldata:any;
  finaldata1:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var url ='http://localhost:3000/signupUsers';
    // this.http.get("assets/db.json").subscribe(data =>{
     this.http.get(url).subscribe(data =>{
      this.finaldata = data
      console.log(this.finaldata)
      // for(let i=0;i<=this.finaldata.length;i++){
      //   var tabledata = this.finaldata[i]
      //   this.finaldata1 = tabledata
      //   console.log(this.finaldata1)
      // }
    })
  }

}
