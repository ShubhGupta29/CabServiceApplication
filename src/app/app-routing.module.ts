import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabBookingSystemComponent } from './cab-booking-system/cab-booking-system.component';
import { LoginComponent } from './cab-booking-system/login/login.component';
import { HomePageComponent } from './cab-booking-system/home-page/home-page.component';
import { ErrorPageComponent } from './cab-booking-system/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: CabBookingSystemComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'error',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
