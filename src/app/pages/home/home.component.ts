import { ProfilePicture } from './../../shared/models/profilePicture.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CourseService } from 'src/app/shared/services/course/course.service';
import { VoiceRecognitionService } from 'src/app/shared/services/voice-recognition/voice-recognition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = '';
  public query: string = '';
  public profilePictureURL: string = '';
  public isUserSpeaking: boolean = false;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private courseService: CourseService,
    private voiceRecognition: VoiceRecognitionService
  ) {}

  public ngOnInit(): void {
    const cookieName = this.getCookie('name');
    this.profilePictureURL = this.getCookie('profilePictureURL');
    this.name = cookieName ? ` ${cookieName}` : '';

    this.initVoiceInput();
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

  initVoiceInput() {
    // Subscription for initializing and this will call when user stopped speaking.
    this.voiceRecognition.init().subscribe(() => {
      // User has stopped recording
      // Do whatever when mic finished listening
      this.searchResults();
    });

    // Subscription to detect user input from voice to text.
    this.voiceRecognition.speechInput().subscribe(input => {
      // Set voice text output to
      this.query = input;
      console.log(input);
    });
  }

  startRecording() {
    this.isUserSpeaking = true;
    this.voiceRecognition.start();
  }

  stopRecording() {
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }
}
