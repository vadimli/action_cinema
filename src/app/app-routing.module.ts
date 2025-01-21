import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { MainPageListComponent } from './components/main-page/main-page-list/main-page-list.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'movie', component: MainPageListComponent },
  { path: 'tv-series', component: MainPageListComponent },
  { path: 'cartoon', component: MainPageListComponent },
  { path: 'anime', component: MainPageListComponent },
  { path: 'film/:id', component: MoviePageComponent },
  { path: 'person/:id', component: PersonPageComponent },
  { path: 'auth', component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
