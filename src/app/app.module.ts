import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './_common/auth.guard';

import { AppComponent } from './app.component';
import { loginModule } from './login/index';
import { homeModule } from './home/index';
import { modifyModule } from './modify/index';

import { APP_ROUTES } from './app.routes';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    loginModule,
    homeModule,
    modifyModule,
    RouterModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [
    AuthGuard,
    ...AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
