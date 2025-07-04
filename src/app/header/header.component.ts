import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset > 50) { // Apply glassmorphism after scrolling 50px
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
