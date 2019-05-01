import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from  '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import {Routes,RouterModule} from '@angular/router'
import { from } from 'rxjs';
import {MatCardModule, MatButtonModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material';
import {MatSelectModule} from '@angular/material'
import { UsersComponent } from './users/users.component'
const routes: Routes =[
  {path:'movies',component:MovieListComponent},
  {path:'users',component:UsersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule, MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
