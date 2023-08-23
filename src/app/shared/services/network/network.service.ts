import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  public online: boolean;
  public isNetworkStopped = false;

  constructor() {
    this.online = window.navigator.onLine;

    fromEvent(window, 'online').subscribe(() => {
      this.online = true;
    });

    fromEvent(window, 'offline').subscribe(() => {
      this.online = false;
    });
    console.log(this.online);
  }
}
