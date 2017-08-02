import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {
    path     : '',
    redirectTo: 'login',
    pathMatch : 'full'
  },
  {
    path     : 'login',
    component: LoginComponent
  },
  {
    path     : 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
];
