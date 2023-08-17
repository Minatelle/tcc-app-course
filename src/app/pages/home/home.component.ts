import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public name: string = 'Gabriel';
  public value: string = '';
  constructor(private router: Router) {}

  public navigateToProfile() {
    this.router.navigate(['profile']);
  }
}
