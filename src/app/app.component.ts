import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarTranslation } from './shared/calendar-translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'tcc-app-course';

  constructor(private primeConfig: PrimeNGConfig) {}

  public ngOnInit() {
    this.primeConfig.ripple = true;
    this.primeConfig.setTranslation(CalendarTranslation);
  }
}
