import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { HeroComponent } from './hero/hero.component'; // Removing HeroComponent

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // HeroComponent // Removing HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
