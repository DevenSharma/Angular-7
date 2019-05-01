import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  public allUsers=[];
  constructor(private __http:RestApiService) { }

  ngOnInit() {
    this.__http.getUsers().subscribe(data=>this.allUsers=data);
  }

}
