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
  public displayedCourses: Course[] = [];
  public first: number = 0;
  public rows: number = 3;

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const query = params['query'];
      this.courseService.getCourses(query).subscribe(courses => {
        this.courses = courses;
        this.displayedCourses = this.courses.slice(this.first, this.first + this.rows);
      });
    });
  }

  public onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.displayedCourses = this.courses.slice(this.first, this.first + this.rows);
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public navigateToCourse(id: string) {
    this.courseService.getCourseContent(id).subscribe(() => {
      this.router.navigate([`course/${id}`]);
    });
  }

  public navigateNoResults() {
    this.router.navigate(['no-results']);
  }
}
