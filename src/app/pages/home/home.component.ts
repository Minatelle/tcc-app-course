import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = '';
  public value: string = '';
  constructor(private router: Router,
    private cookieService: CookieService) { }

  public ngOnInit(): void {
    const cookieName = this.getCookie('name');
    this.name = cookieName ? ` ${cookieName}` : '';
  }

  public navigateToProfile() {
    this.router.navigate(['profile']);
  }

  public navigateToSearchResults() {
    this.router.navigate(['search-results']);
  }

  private getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
