import { Route } from '@angular/router';
import { ModifyComponent } from './index';

export const modifyRoutes: Route[] = [
  { path: 'modify/:id',       component: ModifyComponent },
];
