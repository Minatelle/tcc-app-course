import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  private nameValidators = [Validators.maxLength(12)];
  private birthDateValidators = [Validators.pattern(/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)];

  public showDialog: boolean = false;
  public showUploadLoading: boolean = false;
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', this.nameValidators),
    birthDate: new FormControl<Date | null>(null, this.birthDateValidators)
  });

  get name() {
    return this.formGroup.get('name');
  }

  get birthDate() {
    return this.formGroup.get('birthDate');
  }

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

    this.showDialog = false;
    this.formGroup = this.formBuilder.group({
      name: [cookieName, this.nameValidators],
      birthDate: [cookieBirthDate, this.birthDateValidators]
    });
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public onUploadProfilePicture(event: FileUploadHandlerEvent, fileUpload: any): void {
    this.showUploadLoading = true;
    this.uploadService.uploadProfilePicture(event.files[0]).subscribe(response => {
      this.setCookie('profilePictureURL', response.secure_url);
      this.profilePictureURL = response.secure_url;
      fileUpload.clear();
      this.showUploadLoading = false;
    });
  }

  public onSubmit(): void {
    this.saveFormCookies();
    this.navigateWithSuccess();
  }

  private navigateWithSuccess() {
    this.showDialog = true;
    setTimeout(() => this.navigateToHome(), 2500);
  }

  private saveFormCookies() {
    if (this.name!.value === '*del') {
      this.cookieService.set('profilePictureURL', '');
      this.cookieService.set('name', '');
      this.cookieService.set('birthDate', '');
    } else {
      this.setCookie('name', this.name!.value);
      this.setCookie('birthDate', this.birthDate!.value);
    }
  }

  private getCookie(key: string) {
    return this.cookieService.get(key);
  }

  private setCookie(key: string, value: string): void {
    if (value) {
      this.cookieService.set(key, value);
    }
  }
}
