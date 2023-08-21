import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course.interface';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/course-supply';
  }

  public getCourses(query: string): Observable<Course[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('query', query);

    return this.http.get<Course[]>(`${this.baseUrl}/find-course/`, { headers });
  }

  public getCourseContent(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/find-course/${id}`);
  }
}
