import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {DashboardModule} from './dashboard/dashboard.module';
import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule
  ],
  providers: [],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {

  }

}
