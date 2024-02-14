import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {MoviePageComponent} from "./components/movie-page/movie-page.component";
import {PersonPageComponent} from "./components/person-page/person-page.component";

const routes: Routes = [
  {path: 'movie/:id', component: MoviePageComponent},
  {path: '', component: MainPageComponent},

  // {path: 'person/:id', component: PersonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
