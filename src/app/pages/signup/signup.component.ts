import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      ename:[''],
      birthdate:[''],
      gender:[''],
      role:[''],
      addr1:[''],
      addr2:[''],
      city:[''],
      state:[''],
      pin:[''],
      mobile:[''],
      fname:[''],
      fgender:[''],
      fbirthdate:[''],
      frelationship:[''],
      email:[''],
      password:['']
    })
  }




  signUp(){
    console.log(this.signupForm.value)
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
      .subscribe(res => {
        alert("Signup Successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("something went wrong")
      }
      )
  }


  

}
