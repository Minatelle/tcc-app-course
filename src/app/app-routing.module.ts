import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { NoResultsComponent } from './pages/no-results/no-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'profile' }
  },
  {
    path: 'no-results',
    component: NoResultsComponent,
    data: { animation: 'no-results' }
  },
  {
    path: 'search/:query',
    component: SearchResultsComponent,
    data: { animation: 'search' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
