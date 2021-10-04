import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-style-five',
  templateUrl: './courses-style-five.component.html',
  styleUrls: ['./courses-style-five.component.scss']
})
export class CoursesStyleFiveComponent implements OnInit {

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
}
