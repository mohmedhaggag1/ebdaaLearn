import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  loader = false;
  disable = false;
  status = '';

  constructor(private formBuilder:FormBuilder,public _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
    
   }
   public ContactUsData :FormGroup;

   ngOnInit(): void {
     this.ContactUsData = this.formBuilder.group({
       name:[''],
       email:[''],
       phone:[''],
       subject:[''],
       message:[''],
       
     })
   }

  bgImage = 'assets/img/register-shape.jpg';

  submit(form) {
    let name = form.name;
    console.log(name);

    let email = form.email;
    console.log(email);

    let number = form.number;
    console.log(number);

    let message = form.message;
    console.log(message);
    this.loader = true;
    this.status = 'جاري الإرسال...';
    setTimeout(_ => {
      this.loader = false;
      this.status = 'تم الإرسال';
      setTimeout(_ => {
        this.disable = false;
        this.status = '';
      }, 1500);
    }, 3000);
  }


  contactus(){

    this._api.contact(this.ContactUsData.value).
    subscribe((response)=>{
        alert('شكرا لتواصلك معنا ') 
        console.log(response)
    },err=>{alert("  شكرا لتواصلك معنا " )})
  
    
  }
  }
  