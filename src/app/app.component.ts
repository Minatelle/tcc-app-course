import { Component, OnChanges, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarTranslation } from './shared/translations/calendar-translation';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './shared/animations/route-animations';
import { ConnectionService } from 'ngx-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit, OnChanges {
  public title = 'tcc-app-course';
  private isDisconnect: boolean = false;

  constructor(private router: Router, private primeConfig: PrimeNGConfig, private connectionService: ConnectionService) {}

  public ngOnChanges() {
    this.checkInternetAccess();
  }

  public ngOnInit() {
    this.initPrimeConfig();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  private initPrimeConfig() {
    this.primeConfig.ripple = true;
    this.primeConfig.setTranslation(CalendarTranslation);
  }

  private checkInternetAccess() {
    this.connectionService.monitor().subscribe(currentState => {
      this.isDisconnect = !currentState.hasInternetAccess;
      this.navigateToNoConnection();
    });
  }

  private navigateToNoConnection() {
    if (this.isDisconnect) {
      this.router.navigate(['no-connection']);
    }
  }
}
