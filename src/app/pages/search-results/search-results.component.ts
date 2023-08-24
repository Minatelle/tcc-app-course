import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course.interface';
import { CourseService } from '../../shared/services/course/course.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const query = params['query'];
      this.courseService.getCourses(query).subscribe(courses => {
        this.courses = courses;
      });
    });
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public navigateToCourse(id: string) {
    this.router.navigate([`course/${id}`]);
  }

  public navigateNoResults() {
    this.router.navigate(['no-results']);
  }
}
