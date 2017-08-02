import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DbGuardsService} from './db-guards.service';

export const routes: Routes = [
  {
    path      : '',
    redirectTo: 'login',
    pathMatch : 'full'
  },
  {
    path     : 'login',
    component: LoginComponent,
  },
  {
    path          : 'dashboard',
    // canActivate   : [DbGuardsService],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
];
