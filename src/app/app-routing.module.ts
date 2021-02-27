import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualitesComponent } from './actualites/actualites.component';
import { LiguesComponent } from './ligues/ligues.component';
import { ResultatsComponent } from './resultats/resultats.component';


const routes: Routes = [
  {path: '', component: ActualitesComponent},
  {path: 'actualites', component: ActualitesComponent},
  {path: 'resultats', component: ResultatsComponent},
  {path: 'ligues', component: LiguesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
