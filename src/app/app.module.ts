import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';
// Http client module for fetching up data from a remote API
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

import { ListHttpService } from './list-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'detail/:url', component: ViewDetailComponent }
    ])
  ],
  providers: [ListHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
