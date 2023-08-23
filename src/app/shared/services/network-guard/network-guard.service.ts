import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkGuard implements CanActivate {
  constructor(private network: NetworkService) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.network.online) {
      return true;
    }
    this.network.isNetworkStopped = true;
    return false;
  }
}
