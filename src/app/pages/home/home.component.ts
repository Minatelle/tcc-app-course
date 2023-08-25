import { ProfilePicture } from './../../shared/models/profilePicture.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = '';
  public query: string = '';
  public profilePictureURL: string = '';

  constructor(private router: Router, private cookieService: CookieService, private courseService: CourseService) {}

  public ngOnInit(): void {
    const cookieName = this.getCookie('name');
    this.profilePictureURL = this.getCookie('profilePictureURL');

    this.name = cookieName ? ` ${cookieName}` : '';
  }

  public navigateToProfile() {
    this.router.navigate(['profile']);
  }

  public searchResults() {
    if (!this.query) {
      return;
    }

    this.courseService.getCourses(this.query).subscribe(courses => {
      const route = courses.length > 0 ? `search/${this.query}` : 'no-results';
      this.router.navigate([route]);
    });
  }

  private getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
