import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <p>
      dashboard Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles  : []
})
export class DashboardComponent implements OnInit {

  public param: any;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(p => this.param = p);
  }

  ngOnInit() {
  }

}
