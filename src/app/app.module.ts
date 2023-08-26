import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { NoResultsComponent } from './pages/no-results/no-results.component';
import { NoConnectionComponent } from './pages/no-connection/no-connection.component';
import { CourseComponent } from './pages/course/course.component';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NoResultsComponent,
    NoConnectionComponent,
    SearchResultsComponent,
    CourseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    ButtonModule,
    CalendarModule,
    FileUploadModule,
    InputTextModule,
    RippleModule,
    SelectButtonModule
  ],
  providers: [DatePipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
