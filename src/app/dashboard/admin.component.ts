import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <p>
      admin Works!
    </p>
    <app-product item="NIR"></app-product>  
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
