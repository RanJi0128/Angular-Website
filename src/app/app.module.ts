import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CONCERTSComponent } from './concerts/concerts.component';
import { SportsComponent } from './sports/sports.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CONCERTSComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [
    HomeComponent
  ]
})
export class AppModule { }
