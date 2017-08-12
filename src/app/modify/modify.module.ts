import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FormCreateComponent } from './form-create/form-create.component';

import { OrderPipe } from '../_pipe/orderBy.pipe';

import { DragulaModule }  from '../../../node_modules/ng2-dragula';

@NgModule({
  declarations: [
    HomeComponent,
    FormCreateComponent,
    OrderPipe
    //formGroupLogin
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DragulaModule
  ],
  providers: [OrderPipe]
})

export class homeModule { }
