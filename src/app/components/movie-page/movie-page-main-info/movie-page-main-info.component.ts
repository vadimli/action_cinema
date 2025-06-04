import { Component, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { IFilm } from '../../../shared/models/films/film';
import { IVideoUrl } from '../../../shared/models/films/video';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from '../../../shared/services/platform.service';
import { UserService } from '../../../shared/services/user.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IUser } from '../../../shared/models/auth/user';

@Component({
  selector: 'app-movie-page-main-info',
  templateUrl: './movie-page-main-info.component.html',
  styleUrl: './movie-page-main-info.component.scss',
})
export class MoviePageMainInfoComponent implements OnInit, OnDestroy {
  @Input() public movie: IFilm;

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public trailerId: string;

  public showTrailer = false;
  public imgLoading = true;

  public showMovie = false;
  public user: IUser;

  public get createModalHeader(): string {
    return `${this.movie.name}, ${this.movie.year}`;
  }

  public get isLargeMobile(): boolean {
    return this._platform.isLargeMobile();
  }

  public get addedToFavorite(): boolean {
    return this.user?.favoriteMovies?.includes(this.movie?.id);
  }

  public get currentIcon(): string {
    return this.addedToFavorite ? 'pi pi-check' : 'pi pi-bookmark';
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private _platform: PlatformService,
    private _userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.trailerId = this.getTrailerId(this.movie?.videos?.trailers);
    this._userService.user$.pipe(takeUntil(this.destroy$)).subscribe((value: IUser) => {
      console.log(value)
      this.user = value;
    });
  }

  private getTrailerId(trailers: IVideoUrl[]): string {
    if (!trailers?.length) {
      return null;
    }

    const trailer: IVideoUrl = trailers.find((item: IVideoUrl) => item.site === 'youtube');

    return trailer.url.split('/')[4];
  }

  public showMovieClick(): void {
    this.loadScript('https://kinobox.tv/kinobox.min.js').then(() =>
      this.loadTextScript(
        `
          setTimeout(() => {
            kbox('.kinobox_player', {search: {kinopoisk: ${this.movie?.id.toString()}}});
          }, 0);
      `,
      ).then(() => (this.showMovie = true)),
    );
  }

  private loadTextScript(text: string) {
    return new Promise((resolve) => {
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

  public changeFavorites(): void {
    this._userService
      .changeFavorites(this.movie.id, this.addedToFavorite)
      .pipe(takeUntil(this.destroy$))
      .subscribe((val: IUser) => {
        this._userService.setUser(val);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
