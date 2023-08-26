import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/models/course.interface';
import { CourseService } from 'src/app/shared/services/course/course.service';
import { Location } from '@angular/common';
import { Feedback } from 'src/app/shared/enums/feedback.enum';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public course: Course | undefined;
  public contentLines: string[] = [];
  public disliked: boolean = false;
  public liked: boolean = false;

  constructor(private location: Location, private route: ActivatedRoute, private courseService: CourseService) {}

  public get feedback(): typeof Feedback {
    return Feedback;
  }

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

  public giveFeedback(feedback: Feedback) {
    if (feedback === Feedback.Like) {
      this.disliked = !this.disliked;
      this.liked = false;
    } else if (feedback === Feedback.Dislike) {
      this.liked = !this.liked;
      this.disliked = false;
    }
  }
}
