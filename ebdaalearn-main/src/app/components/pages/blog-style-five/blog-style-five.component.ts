import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-blog-style-five',
  templateUrl: './blog-style-five.component.html',
  styleUrls: ['./blog-style-five.component.scss']
})
export class BlogStyleFiveComponent implements OnInit {

  constructor(public _ActivateRoute:ActivatedRoute,
    public _apis:ApiService ,
    public route:Router) {
      this.geteveryTeachers()
   }
   
  showMe:boolean =true;

   toggle(){
     this.showMe=!this.showMe;
   }


   teachers :any;
   geteveryTeachers(){
    this._apis.getAllTeachers().subscribe((data) => { this.teachers = data; })
   }
   
   
   deleteone(idteach:any){
     console.log(idteach)
     this._apis.deleteteacher(idteach).subscribe((Response)=>location.reload())
   }

  ngOnInit(): void {
    // this.geteveryTeachers()
    // location.reload()
   
  }

}
