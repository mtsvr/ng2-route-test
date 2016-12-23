/**
 * Created by matias on 22-12-16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { Route1Component } from './route1/route1.component';
import { Route11Component } from './route1/route1-1/route1-1.component';
import { Route12Component } from './route1/route1-2/route1-2.component';

import { Route2Component } from './route2/route2.component';
import { Route21Component } from './route2/route2-1/route2-1.component';
import { Route22Component } from './route2/route2-2/route2-2.component';
import { Route23Component } from './route2/route2-3/route2-3.component';


const routes: Routes =[
  { path: '', redirectTo:'route1' ,pathMatch: 'full' },
  { path:'route1', component: Route1Component,
    children: [
      { path: '', redirectTo: 'route1-1', pathMatch: 'full' },
      { path:'route1-1', component: Route11Component },
      { path:'route1-2', component: Route12Component },
    ]
  },
  { path:'route2', component: Route2Component,
    children: [
      { path: '', redirectTo: 'route2-1', pathMatch: 'full' },
      { path: 'route2-1', component: Route21Component },
      { path: 'route2-2', component: Route22Component },
      { path: 'route2-3', component: Route23Component },
    ]
  },
];

const rootRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'index', component: AppComponent, children: routes },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
