import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 appAlert>App Root</h1>

    <app-child [text]="text"
               (onText)="eventHandler()"></app-child>
  `
})
export class AppComponent {

  text = 'hey!';

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/todos')
        .subscribe( response => console.log(response) )
  }

  eventHandler() {
    alert('event!')
  }

}
