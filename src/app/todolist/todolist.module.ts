import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import {ListService} from './list.service';
import {UtilsModule} from '../utils/utils.module';
import {DbCoreModule} from '../db-core/db-core.module';

@NgModule({
  imports     : [CommonModule, UtilsModule, DbCoreModule],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    ToggleComponent,
    CounterComponent,
    ButtonComponent,
    TitleComponent,
    InputComponent,
    ItemComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {

  constructor() {
    console.log('TodolistModule Module');
  }

}
