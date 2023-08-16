import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarTranslation } from './shared/calendar-translation';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/route-animations/route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  public title = 'tcc-app-course';

  constructor(private primeConfig: PrimeNGConfig) {}

  public ngOnInit() {
    this.primeConfig.ripple = true;
    this.primeConfig.setTranslation(CalendarTranslation);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
