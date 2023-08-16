import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UploadEvent } from 'primeng/fileupload/fileupload.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public dateToday: string = new Date().toLocaleDateString();
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    birthDate: new FormControl(''),
  });

  constructor(private router: Router) {}

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public onBasicUploadAuto(event: UploadEvent) {
    console.log('Send!');
  }
}
