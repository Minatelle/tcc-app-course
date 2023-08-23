import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.scss']
})
export class NoConnectionComponent {
  constructor(private router: Router) {}

  public navigateToHome() {
    this.router.navigate(['/']);
  }
}
