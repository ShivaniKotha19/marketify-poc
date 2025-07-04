import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { TeamFocusComponent } from './team-focus/team-focus.component';

// Lottie
// import { LottieModule } from 'ngx-lottie'; // Removing Lottie
// import player from 'lottie-web'; // Removing Lottie

// Export function for Lottie player (AOT compatibility)
// export function playerFactory() { // Removing Lottie
//   return player;
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CoreFeaturesComponent,
    TeamFocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LottieModule.forRoot({ player: playerFactory }) // Removing Lottie
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
