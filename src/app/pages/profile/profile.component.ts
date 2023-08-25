import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FileUploadHandlerEvent } from 'primeng/fileupload/fileupload.interface';
import { UploadService } from '../../shared/services/upload/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    birthDate: new FormControl<Date | null>(null)
  });

  public profilePictureURL: string | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private uploadService: UploadService
  ) {}

  public ngOnInit(): void {
    const cookieName = this.getCookie('name');
    const cookieBirthDate = this.getCookie('birthDate');

    this.profilePictureURL = this.getCookie('profilePictureURL');

    this.formGroup = this.formBuilder.group({
      name: [cookieName],
      birthDate: [cookieBirthDate ? new Date(cookieBirthDate) : null]
    });
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public uploadHandler(event: FileUploadHandlerEvent, fileUpload: any) {
    this.uploadService.uploadProfilePicture(event.files[0]).subscribe(response => {
      this.setCookie('profilePictureURL', response.url);
      this.profilePictureURL = response.url;

      fileUpload.clear();
    });
  }

  public onSubmit(): void {
    this.setCookie('name', this.formGroup.value.name);
    this.setCookie('birthDate', this.formGroup.value.birthDate);
  }

  private getCookie(key: string) {
    return this.cookieService.get(key);
  }

  private setCookie(key: string, value: string | null): void {
    if (value) {
      this.cookieService.set(key, value);
    }
  }
}
