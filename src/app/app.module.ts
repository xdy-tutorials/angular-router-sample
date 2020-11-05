import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {FormsModule} from "@angular/forms";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, HeroesModule, AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
