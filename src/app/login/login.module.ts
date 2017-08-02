import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';

@NgModule({
  imports     : [
    CommonModule
  ],
  declarations: [LoginComponent],
  exports     : [LoginComponent]
})
export class LoginModule {
}
