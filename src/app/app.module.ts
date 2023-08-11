import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AvatarModule,
    ButtonModule,
    FileUploadModule,
    InputTextModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
