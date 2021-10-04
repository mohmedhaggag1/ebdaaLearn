import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-about-style-three',
  templateUrl: './about-style-three.component.html',
  styleUrls: ['./about-style-three.component.scss']
})
export class AboutStyleThreeComponent implements OnInit {
//to send my recived code  عشان نسيت الباسورد 
public MyDataTOchange :FormGroup;
constructor(public formBuilder:FormBuilder,private _route:Router,
  public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
  public _http:HttpClient) {
}

    ngOnInit(): void {
      this.MyDataTOchange = this.formBuilder.group({
        email:[''],
        code:[''],
        newPassword:['']
      })
    }

    
// change password when forget 

ForGEtPassWOrd(){

  this._api.forgetpassword(this.MyDataTOchange.value).subscribe((response)=>{
     
    alert('تم تغيير الرقم السري بنجاح') 
      console.log(response)
      this.MyDataTOchange.reset();
      this._route.navigate(['login'])
  },err=>{alert("تأكد من صحة البريد الإلكتروني أو الكود" )})

  
}

}