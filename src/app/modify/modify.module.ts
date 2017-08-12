import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModifyComponent } from './modify.component';
//import { FormCreateComponent } from './form-create/form-create.component';

@NgModule({
  declarations: [
    ModifyComponent,
    //FormCreateComponent
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

export class modifyModule { }
