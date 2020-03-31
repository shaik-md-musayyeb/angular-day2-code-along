import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { DatabindingComponent } from './databinding/databinding.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {AboutusComponent} from './aboutus/aboutus.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'aboutus', component: AboutusComponent}
  // Syntax for setting path{path:'componentname', component: ClassName}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
