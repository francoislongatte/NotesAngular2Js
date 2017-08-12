import { Route } from '@angular/router';
import { LoginComponent } from '../login/index';
import { HomeComponent } from './index';

import { AuthGuard } from '../_common/auth.guard';

export const homeRoutes: Route[] = [
  { path: '',       component: LoginComponent },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
];
