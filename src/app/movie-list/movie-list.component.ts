import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  public movies=[];
  constructor(private __http:RestApiService) { }
  

  ngOnInit() {
    this.__http.getMovies().subscribe(data=> this.movies=data);
   
  }

}
