import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {MoviePageComponent} from "./components/movie-page/movie-page.component";
import {PersonPageComponent} from "./components/person-page/person-page.component";
import {MainPageListComponent} from "./components/main-page/main-page-list/main-page-list.component";

let routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'selection', component: MainPageListComponent},
  {path: 'movie/:id', component: MoviePageComponent},
  {path: 'person/:id', component: PersonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
