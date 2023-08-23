import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course.interface';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly baseUrl: string;
  private courses: Observable<Course[]> | undefined;
  private lastQuery: string | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = 'https://tcc-srv-course-supply.onrender.com/course-supply/';
  }

  public getCourses(query: string): Observable<Course[]> {
    if (!this.courses || this.lastQuery !== query) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('query', query);

      this.courses = this.http.get<Course[]>(`${this.baseUrl}/find-course/`, { headers }).pipe(
        shareReplay(1),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
      this.lastQuery = query;
    }
    return this.courses;
  }

  public getCourseContent(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/find-course/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0 && error.error instanceof ProgressEvent) {
      this.router.navigate(['no-connection']);
    }
    return throwError('Ocorreu um erro ao buscar os cursos. Por favor, tente novamente mais tarde.');
  }
}
