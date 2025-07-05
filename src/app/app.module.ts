import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { TeamFocusComponent } from './team-focus/team-focus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';
import { FooterComponent } from './footer/footer.component';

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
    TeamFocusComponent,
    HowItWorksComponent,
    CtaBannerComponent,
    TestimonialsComponent,
    PricingPlansComponent,
    TrustedByComponent,
    FooterComponent
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
