import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { LiguesComponent } from './ligues/ligues.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualitesComponent,
    ResultatsComponent,
    LiguesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
