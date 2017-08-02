import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListService} from './todolist/list.service';
import {TodolistModule} from './todolist/todolist.module';
import {UtilsModule} from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    TodolistModule,
      UtilsModule
  ],
  providers   : [
    {
      provide : ListService,
      useClass: ListService,
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
