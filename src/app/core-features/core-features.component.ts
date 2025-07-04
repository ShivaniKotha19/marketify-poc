import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  iconPlaceholder: string; // e.g., 'icon-doc-image', or text like '📄'
  // Later, this could be a path to an SVG or an icon class name
}

@Component({
  selector: 'app-core-features',
  templateUrl: './core-features.html',
  styleUrls: ['./core-features.css']
})
export class CoreFeaturesComponent implements OnInit, AfterViewInit {

  @ViewChildren('featureCard') featureCards!: QueryList<ElementRef>;

  features: Feature[] = [
    {
      title: 'Logo & Brand Assets',
      description: 'Get high-quality logos, icons, and visual assets in multiple formats and resolutions.',
      iconPlaceholder: 'assets-icon'
    },
    {
      title: 'Brand Colors & Fonts',
      description: 'Access complete brand palettes, typography choices, and design system information.',
      iconPlaceholder: 'colors-fonts-icon'
    },
    {
      title: 'Real-Time API',
      description: 'Lightning-fast API responses with comprehensive data structures and easy integration.',
      iconPlaceholder: 'api-icon'
    },
    {
      title: 'Always Updated',
      description: 'Automatically synced brand information that stays current with the latest changes.',
      iconPlaceholder: 'updated-icon'
    }
  ];

  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px',
      threshold: 0.1 // % of item visible
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Optional: stop observing after it's visible
        }
      });
    }, options);

    this.featureCards.forEach(card => {
      this.observer.observe(card.nativeElement);
    });
  }
}
