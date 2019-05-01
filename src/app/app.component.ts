import { Component, OnInit, Optional } from '@angular/core';
import {RestApiService} from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
 public movies=[];
 constructor(private _http:RestApiService){}
 title= "data";
 ngOnInit(){
  
 }
  
}