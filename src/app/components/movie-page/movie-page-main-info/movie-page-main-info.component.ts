import {Component, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {IFilm} from "../../../shared/models/films/film";
import {IVideoUrl} from "../../../shared/models/films/video";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-movie-page-main-info',
  templateUrl: './movie-page-main-info.component.html',
  styleUrl: './movie-page-main-info.component.scss',
})
export class MoviePageMainInfoComponent implements OnInit {

  @Input() public movie: IFilm;

  public trailerId: string;
  public showTrailer = false;
  public showMovie = false;


  public get createModalHeader(): string {
    return `${this.movie.name}, ${this.movie.year}`;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    this.trailerId = this.getTrailerId(this.movie.videos.trailers);
  }



  private getTrailerId(trailers: IVideoUrl[]): string {
    if (!trailers) {
      return null;
    }

    const trailer: IVideoUrl = trailers.find((item: IVideoUrl) => item.site === 'youtube');

    return trailer.url.split('/')[4];
  }

  public showMovieClick(): void {
    this.loadScript('https://kinobox.tv/kinobox.min.js').then(
      () => this.loadTextScript(`
          setTimeout(() => {
        new Kinobox('.kinobox_player', {search: {kinopoisk: ${this.movie?.id.toString()}}}).init();
          }, 0);
      `).then(() => this.showMovie = true));
  }

  private loadTextScript(text: string) {
    return new Promise(resolve => {
      const script = this.renderer2.createElement('script');
      script.text = text;
      this.renderer2.appendChild(this.document.body, script);
      resolve(text);
    });
  }

  private loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.body, script);
    });
  }
}
