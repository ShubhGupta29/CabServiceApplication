import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabBookingSystemComponent } from './cab-booking-system/cab-booking-system.component';
import { LoginComponent } from './cab-booking-system/login/login.component';
import { HomePageComponent } from './cab-booking-system/home-page/home-page.component';
import { ErrorPageComponent } from './cab-booking-system/error-page/error-page.component';
import { HeaderComponent } from './cab-booking-system/home-page/header/header.component';
import { ProfileComponent } from './cab-booking-system/home-page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CabBookingSystemComponent,
    LoginComponent,
    HomePageComponent,
    ErrorPageComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
