import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public formBuilder:FormBuilder,private _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
  }

//tologin
public loginForm :FormGroup;

//tosendCode when forget password
public SendCode :FormGroup;

//to send my recived code  عشان نسيت الباسورد 
public MyDataTOchange :FormGroup;

//to changepassword 
public changepassword :FormGroup;


 ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email:[''],
    password:[''],
    
  })
  //to send Code using email
  this.SendCode = this.formBuilder.group({
    toEmail:['']
  })
//to send the recived Code 
this.MyDataTOchange = this.formBuilder.group({
  email:[''],
  code:[''],
  newPassword:['']
})

// to change password
this.changepassword = this.formBuilder.group({
  email:[''],
  password:[''],
  newPassword:['']
})




  }

  login(){
    this._api.loginUser(this.loginForm.value).subscribe((response)=>{
    if(response.data.isAuthenticated == true){
      if(response.data.roles.includes("Admin")){
        this._route.navigate(['SubscribeStyleFourComponent'])
        // alert ("hello admin");
      }
      else{
      this.loginForm.reset();
      // localStorage.setItem('token' , response.token)
      this._route.navigate(['home'])
      }

      localStorage.setItem('token' , response.data.token)
      console.log(response.data.token)
    }
    else{
      alert ("هذا المستخدم غير موجود")
    }
  },err=>{alert("تأكد من صحة البيانات" )})

  
}

  

 sendMyCode(){

  this._api.sendCodeTomaile(this.SendCode.value).
  subscribe((response)=>{
      alert('تم إرسال الكود الخاص بك') 
      console.log(response)
      this.SendCode.reset();
  },err=>{alert("تأكد من صحة البيانات" )})

  
}


// change password when forget 

ForGEtPassWOrd(){

  this._api.forgetpassword(this.MyDataTOchange.value).subscribe((response)=>{
     
    alert('تم تغيير الرقم السري بنجاح') 
      console.log(response)
      this.MyDataTOchange.reset();
      this._route.navigate(['shop-login'])
  },err=>{alert("تأكد من صحة البريد الإلكتروني أو الكود" )})

  
}

//ChangePassword Function 

Changepass(){
 
  this._api.ChangeMYPassword(this.changepassword.value).subscribe((response)=>{
     
    alert('تم تغيير الرقم السري بنجاح') 
      console.log(response)
      this.changepassword.reset();
      this._route.navigate(['shop-login'])
  },err=>{alert("تأكد من صحة البيانات " )})

}
  
}
