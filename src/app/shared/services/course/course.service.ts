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
  private course: Observable<Course> | undefined;
  private lastQuery: string | undefined;
  private lastId: string | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = 'https://f100-2804-14c-478-2e1-2080-2641-b628-9931.ngrok-free.app/course-supply/';
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
    if (!this.course || this.lastId !== id) {
      this.course = this.http.get<Course>(`${this.baseUrl}/find-course/${id}`).pipe(
        shareReplay(1),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
      this.lastId = id;
    }
    return this.course;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0 && error.error instanceof ProgressEvent) {
      this.router.navigate(['no-connection']);
    }
    return throwError(() => new Error('Ocorreu um erro ao buscar os cursos. Por favor, tente novamente mais tarde.'));
  }
}
