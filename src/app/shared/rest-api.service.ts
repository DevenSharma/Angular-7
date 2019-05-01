import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from '../shared/employee';
import {Users} from '../shared/employee'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { 

  }
   // Define API
   apiURL = 'https://api.androidhive.info/json/movies.json';
   api_main = 'https://jsonplaceholder.typicode.com';

  getMovies():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL)
  }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.api_main+'/users')
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
