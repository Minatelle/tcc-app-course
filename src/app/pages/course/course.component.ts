import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/models/course.interface';
import { CourseService } from 'src/app/shared/services/course/course.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public course: Course | undefined;
  public contentLines: string[] = [];

  constructor(private location: Location, private route: ActivatedRoute, private courseService: CourseService) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.courseService.getCourseContent(id).subscribe(course => {
        this.course = course;
        this.contentLines = this.getContentLines(course?.content);
      });
    });
  }

  public navigateBack() {
    this.location.back();
  }

  public getContentLines(content: string): string[] {
    return content.split('\\n');
  }
}
