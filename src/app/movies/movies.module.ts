import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DurationPipe } from './pipes/duration.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieComponent,MoviesListComponent, MovieDetailsComponent,DurationPipe],
  providers: [MovieService],
  imports: [
    CommonModule,
    MoviesRoutingModule,HttpClientModule,FormsModule
  ]
})
export class MoviesModule { }
