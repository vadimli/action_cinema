import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {class: 'header'},
})
export class HeaderComponent implements OnInit{

  constructor(private _movieService: MovieService){}
  ngOnInit(): void {
    this._movieService.getLatestMovie().subscribe(v => {
      console.log(v)
    })
  }

}


