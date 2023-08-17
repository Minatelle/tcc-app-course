import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UploadEvent } from 'primeng/fileupload/fileupload.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    birthDate: new FormControl<Date | null>(null),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) { }

  public ngOnInit(): void {
    const cookieName = this.getCookie('name');
    const cookieBirthDate = this.getCookie('birthDate');

    this.formGroup = this.formBuilder.group({
      name: [cookieName],
      birthDate: [cookieBirthDate ? new Date(cookieBirthDate) : null]
    });
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public onBasicUploadAuto(event: UploadEvent) {
    console.log('Send!', event);
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
