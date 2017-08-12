import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../_common/headers';
import AjaxRequestLib from '../_common/ajaxRequestLib.js';
import * as Cookies from '../../../node_modules/js-cookie';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, public http:Http) { }

  ngOnInit() {

  }


  public login(data: any){
    AjaxRequestLib.postLogin(data.email,data.password,(data) => {
      if(!data.error){
        (<any>Cookies).set('Auth', data.apiKey);
        this.router.navigate(['home']);
      }else{
        alert("erreur d'identifiant");
      }
    });
  }


  public signup(event){
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
