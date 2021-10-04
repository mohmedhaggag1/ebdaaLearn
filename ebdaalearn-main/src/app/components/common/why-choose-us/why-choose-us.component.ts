import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

  constructor(public formBuilder:FormBuilder,private _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
  }

	public portfile :FormGroup;
	ngOnInit(): void {
	 
	  this.portfile = this.formBuilder.group({
		Name : [''],  
		Title:[''],
		Image:File
		
	  })
	  
	}

	// displ (nameobj:any){
	// 	this.portfile.get('Name').setValue(nameobj);
	// 	console.log("Nam"+ nameobj)

	// }
	// displa (titleobj:any){
	// 	this.portfile.get('Title').setValue(titleobj);
	// 	console.log("title"+ titleobj)
	// }

	display (event :any){
		if( event.target.files && event.target.files[0]){
			const image = event.target.files[0] as File;
			this.portfile.get('Image').setValue(image);
			// console.log(event.target.files)
			// console.log("immmmmm"+ image)
		}
	}
	
	addteacher(){
		const formData =new FormData();
		// const image2 = this.portfile.get('Image').value
        //  console.log( this.portfile.get('Image').value)
		formData.append('Name' ,  this.portfile.get('Name').value);
		formData.append('Title' , this.portfile.get('Title').value);
		formData.append('Image' ,this.portfile.get('Image').value );
		// console.log("name"+ formData.get('Name'))
		// console.log("TITLe"+ formData.get('Title'))
		// console.log("image"+ formData.get('Image'))

		  this._api.addTeacher(formData).subscribe((response)=>{alert("تم إضافة معلم جديد بنجاح")})
		
		}
	
	}
	