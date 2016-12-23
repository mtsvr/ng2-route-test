import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { RoutingModule } from './routing.module'

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';

import { Route1Component } from './route1/route1.component';
import { Route11Component } from './route1/route1-1/route1-1.component';
import { Route12Component } from './route1/route1-2/route1-2.component';

import { Route2Component } from './route2/route2.component';
import { Route21Component } from './route2/route2-1/route2-1.component';
import { Route22Component } from './route2/route2-2/route2-2.component';
import { Route23Component } from './route2/route2-3/route2-3.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    Route1Component,
    Route2Component,
    Route11Component,
    Route11Component,
    Route12Component,
    Route21Component,
    Route22Component,
    Route23Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
