import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-funfacts-style-three',
  templateUrl: './funfacts-style-three.component.html',
  styleUrls: ['./funfacts-style-three.component.scss']
})
export class FunfactsStyleThreeComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,public _route:Router,
		public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
		public _http:HttpClient) {
			this.getallTeacher()
	   }
	
	public courseobj :FormGroup;
	// public registrationForm :FormGroup;
	ngOnInit(): void {
	 
	  this.courseobj = this.formBuilder.group({
		Image:File,
		Title:[''],
		Body:[''],
		NumberOfStudents:[''],
		Price:[''],
		TeachersId:[''],
		CategoriesId:1
				
	  })

	  
	
	}

	addFileToObject (event :any){
		if( event.target.files && event.target.files[0]){
			const image = event.target.files[0] as File;
			this.courseobj.get('Image').setValue(image);
		}
	}
	
	
	addoneCourse(){
		const formData =new FormData();
		// const image2 = this.courseobj.get('Image').value
		formData.append('Image' ,this.courseobj.get('Image').value );
		formData.append('Title' , this.courseobj.get('Title').value);
		formData.append('Body' ,  this.courseobj.get('Body').value);
		formData.append('NumberOfStudents' ,  this.courseobj.get('NumberOfStudents').value);
		formData.append('Price' ,  this.courseobj.get('Price').value);
		formData.append('TeachersId' ,  this.courseobj.get('TeachersId').value);
		formData.append('CategoriesId' ,  this.courseobj.get('CategoriesId').value);
		
		console.log("image"+ formData.get('Image'))
		console.log("TITLe"+ formData.get('Title'))
		console.log("Body"+ formData.get('Body'))
		console.log("NumberOfStudents"+ formData.get('NumberOfStudents'))
		console.log("Price"+ formData.get('Price'))
		console.log("TeachersId"+ formData.get('TeachersId'))
		console.log("CategoriesId"+ formData.get('CategoriesId'))

		  this._api.addCourse(formData).subscribe((response)=>{alert("تم إضافة دورة تدريبية بنجاح")})
		}
	
	
	//DropDown to get all teacher id and chose from  
	posts :any;
	getallTeacher(){
		this._api.getAllTeachers().subscribe((response)=>{this.posts=response})

		}
	
	   getSelectValue(selectvalueID :any) {
		this.courseobj.get('TeachersId').setValue(selectvalueID)
		// console.log("selectvalue is " +this.courseobj.get('TeachersId').value);
			}

}
	