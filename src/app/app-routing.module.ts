import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent, pathMatch:'full'
  },
  {
    path:'service', component:ServicesComponent,
  },
  {
    path:'careers', component:CareersComponent,
  },
  {
    path:'contactus', component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
