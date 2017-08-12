import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { tokenNotExpired } from 'angular2-jwt';
import * as Cookies from '../../../node_modules/js-cookie';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if ((<any>Cookies).get('Auth')) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
