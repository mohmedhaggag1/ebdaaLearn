import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
    selector: 'app-feedback-style-three',
    templateUrl: './feedback-style-three.component.html',
    styleUrls: ['./feedback-style-three.component.scss']
})
export class FeedbackStyleThreeComponent implements OnInit {

   
constructor(private formBuilder:FormBuilder,public _route:Router,
  public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
  public _http:HttpClient) {
  
 }


public SignupForm :FormGroup;
ngOnInit(): void {

this.SignupForm = this.formBuilder.group({
  username : [''],  
  email:[''],
  password:[''],
  confirmPassword:['']
})
}

signup(){


this._api.register(this.SignupForm.value).subscribe((response)=>{
 
  // if(response.succeeded== true){
   
    alert("تم إنشاء حساب جديد بنجاح")
    console.log(response)
    this._route.navigate(['login'])

},err=>{alert("تأكد من صحة البيانات" )})
}



}
