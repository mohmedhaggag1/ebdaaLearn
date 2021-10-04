import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  allCourses: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.loader = true;
    this.apiService.getAllCourses().subscribe(response => {
      this.allCourses = response;
      this.loader = false;
      console.error(this.allCourses)
    });
  }

  goTo(CourseId): void {
    this.router.navigate(['/details-courses', {i: CourseId}]);
  }

  deleteCourse(id :any){
   this.apiService.deleteCourse(id).subscribe((response)=>{
    location.reload()
     alert('تم حذف الدورة بنجاح ')
  },err=>{alert("حدث خطأ أثناء حذف الدورة " )})
  }

 

}
