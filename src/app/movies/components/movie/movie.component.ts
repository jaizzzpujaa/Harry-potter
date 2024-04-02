import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input("movie") movie: Movie | undefined;

  constructor(private router: Router) {}

  ngOnInit(){}
  
  details(movieid?: number) {
    if(movieid){
      this.router.navigate(['/movies', movieid]);
    }
  }
}
