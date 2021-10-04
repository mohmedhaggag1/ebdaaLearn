import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {ApiService} from '../../../../core/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-distance-courses',
  templateUrl: './distance-courses.component.html',
  styleUrls: ['./distance-courses.component.scss']
})
export class DistanceCoursesComponent implements OnInit {

  allCourses: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.apiService.getAllCourses().subscribe(response => {
      response ? this.allCourses = response.splice(0, 6) : this.allCourses = [];
      this.loader = false;
    });
  }

  goTo(CourseId): void {
    this.router.navigate(['/details-courses', {i: CourseId}]);
  }
}
