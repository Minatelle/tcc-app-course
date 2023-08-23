import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { NoResultsComponent } from './pages/no-results/no-results.component';
import { NoConnectionComponent } from './pages/no-connection/no-connection.component';
import { NetworkGuard } from './shared/services/network-guard/network-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [NetworkGuard],
    data: { animation: 'profile' }
  },
  {
    path: 'no-connection',
    component: NoConnectionComponent,
    data: { animation: 'no-connection' }
  },
  {
    path: 'no-results',
    component: NoResultsComponent,
    canActivate: [NetworkGuard],
    data: { animation: 'no-results' }
  },
  {
    path: 'search/:query',
    component: SearchResultsComponent,
    canActivate: [NetworkGuard],
    data: { animation: 'search' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
