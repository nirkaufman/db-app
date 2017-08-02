import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { ChildComponent } from './child.component';
import { UpPipe } from './up.pipe';
import { AlertDirective } from './alert.directive';
import {LoggerService} from './logger.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ChildComponent, UpPipe, AlertDirective],
  imports     : [BrowserModule, HttpClientModule],
  providers   : [LoggerService],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
