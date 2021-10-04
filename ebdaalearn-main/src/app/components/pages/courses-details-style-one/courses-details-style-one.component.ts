import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../core/api.service";
import {environment} from "../../../../environments/environment";
import {throwError} from "rxjs";

@Component({
  selector: 'app-courses-details-style-one',
  templateUrl: './courses-details-style-one.component.html',
  styleUrls: ['./courses-details-style-one.component.scss']
})
export class CoursesDetailsStyleOneComponent implements OnInit {
  courseDetails: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.getOneCourse(param.i);
    });
  }

  getOneCourse(CourseId): void {
    this.loader = true;
    this.apiService.getOneCourseById(CourseId).subscribe(response => {
      this.courseDetails = response;
      this.loader = false;
    },error => this.router.navigateByUrl('/not-found').then(value => console.error(error)));
  }
}
