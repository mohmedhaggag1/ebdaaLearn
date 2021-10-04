import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
    selector: 'app-about-style-four',
    templateUrl: './about-style-four.component.html',
    styleUrls: ['./about-style-four.component.scss']
})
export class AboutStyleFourComponent implements OnInit {

   
  constructor(public formBuilder:FormBuilder,private _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
  }

  public changepassword :FormGroup;
    ngOnInit(): void {
        
// to change password
        this.changepassword = this.formBuilder.group({
            email:[''],
            password:[''],
            newPassword:['']
        })
  
    }

    Changepass(){
 
        this._api.ChangeMYPassword(this.changepassword.value).subscribe((response)=>{
           
          alert('تم تغيير الرقم السري بنجاح') 
            console.log(response)
            this.changepassword.reset();
            this._route.navigate(['shop-login'])
        },err=>{alert("تأكد من صحة البيانات " )})
      
      }
        
      
}