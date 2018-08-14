import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SusbcriptionComponent } from './components/susbcription/susbcription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'home', component : HomeComponent },
  { path : 'subscription', component : SusbcriptionComponent },
  { path : 'connexion', component : ConnexionComponent },
  { path : 'dashboard', component : DashboardComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
