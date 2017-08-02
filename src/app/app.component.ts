import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/login">login</a>
    <a routerLink="/dashboard">dashboard</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
