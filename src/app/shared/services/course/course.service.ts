import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course.interface';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly baseUrl: string;
  private courses: Observable<Course[]> | undefined;
  private lastQuery: string | undefined;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://tcc-srv-course-supply.onrender.com/course-supply/';
  }

  public getCourses(query: string): Observable<Course[]> {
    if (!this.courses || this.lastQuery !== query) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('query', query);

      this.courses = this.http.get<Course[]>(`${this.baseUrl}/find-course/`, { headers }).pipe(shareReplay(1));
      this.lastQuery = query;
    }
    return this.courses;
  }

  public getCourseContent(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/find-course/${id}`);
  }
}
