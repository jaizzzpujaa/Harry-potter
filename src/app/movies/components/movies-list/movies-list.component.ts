import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  releaseYearFilter: string = '';
  loading: boolean = true;
  
constructor(private movieService: MovieService, private router: Router) {}

ngOnInit() {
this.loading = true;
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filterMovies();
      this.loading = false;
    });
}

loadMovies() {
    this.movieService.getMovies().pipe(tap(s => console.log(s))).subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
}

details(movieid: number) {
    this.router.navigate(['/movies', movieid]);
}


filterMovies() {
   
   this.filteredMovies = this.movies.filter((movie: Movie) =>
      movie?.title?.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      this.filterByYear(movie?.release_date)
    );
}

filterByYear(releaseDate?: string): boolean {
    if (!this.releaseYearFilter || !releaseDate) {
      return true; 
    }

    const yearFromReleaseDate = new Date(releaseDate).getFullYear().toString();
    return yearFromReleaseDate.includes(this.releaseYearFilter);
}

}
