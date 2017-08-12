import { RouterModule, Routes } from '@angular/router';

// APP ROUTES
import { signupRoutes } from './signup/index';
import { loginRoutes } from './login/index';
import { homeRoutes } from './home/index';
import { modifyRoutes } from './modify/index';


const ROUTES: Routes = [
  ...homeRoutes,
  ...loginRoutes,
  ...signupRoutes,
  ...modifyRoutes
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});
