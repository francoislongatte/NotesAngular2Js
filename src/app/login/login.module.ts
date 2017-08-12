import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    //formGroupLogin
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class loginModule { }
