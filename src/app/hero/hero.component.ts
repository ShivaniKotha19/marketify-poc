import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {

  lottieOptions: AnimationOptions = {
    // IMPORTANT: User needs to provide the 'lottie-bubbles.json' file in the 'assets' folder,
    // or update this path if using a different location or filename.
    path: 'assets/lottie-bubbles.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Or other as needed
      // progressiveLoad: true, // Optional
    }
  };

  constructor() { }

  ngOnInit(): void {
    // Lottie options are set directly.
    // Could also fetch options or path dynamically here if needed.
  }

}
