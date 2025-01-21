import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent implements OnInit {
  public queryParam: 'register' | 'login' = 'login';

  constructor(private _route: ActivatedRoute) {}

  public ngOnInit() {
    this._route.queryParams.subscribe((params: Params) => {
      if (params['form']) {
        this.queryParam = params['form'];
      } else {
        this.queryParam = 'login';
      }
    });
  }
}
