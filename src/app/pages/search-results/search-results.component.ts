import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course.interface';
import { CourseService } from '../../shared/services/course/course.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public results: Course[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const query = params['query'];
      console.log('query', query);
      this.courseService.getCourses(query).subscribe(courses => {
        console.log('courses', courses);
        this.results = courses;
      });
    });
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
