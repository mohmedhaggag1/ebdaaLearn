import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
    selector: 'app-about-style-one',
    templateUrl: './about-style-one.component.html',
    styleUrls: ['./about-style-one.component.scss']
})
export class AboutStyleOneComponent implements OnInit {

  
    constructor(public formBuilder:FormBuilder,private _route:Router,
        public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
        public _http:HttpClient) {
      }
    
      public SendCode :FormGroup;
    ngOnInit(): void {
        this.SendCode = this.formBuilder.group({
            toEmail:['']
          })
    }



    
 sendMyCode(){

    this._api.sendCodeTomaile(this.SendCode.value).
    subscribe((response)=>{
        alert('تم إرسال الكود الخاص بك') 
        console.log(response)
        this.SendCode.reset();
    },err=>{alert("تأكد من صحة البيانات" )})
  
    
  }
}