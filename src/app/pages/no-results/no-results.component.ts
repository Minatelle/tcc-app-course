import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent {
  constructor(private router: Router) {}

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
