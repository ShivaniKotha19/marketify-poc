

import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  imagePlaceholderUrl: string;
  rating: number; // e.g., 4 or 5
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit { // Added AfterViewInit for potential animation setup
  @ViewChildren('testimonialCard') testimonialCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      company: 'Lead UI Designer, Creatix',
      quote: '“Marketify helped us speed up our branding process like never before. It’s now part of every kickoff!”',
      imagePlaceholderUrl: 'https://via.placeholder.com/60x60?text=SM',
      rating: 5
    },
    {
      name: 'James Carter',
      company: 'Frontend Developer, DevNest',
      quote: '“Pulling brand colors and fonts into our UI components is now seamless thanks to Marketify’s API.”',
      imagePlaceholderUrl: 'https://via.placeholder.com/60x60?text=JC',
      rating: 4
    },
    {
      name: 'Priya Nair',
      company: 'Digital Marketer, GrowthGrid',
      quote: '“No more chasing brand guidelines from clients — Marketify saves us hours every week.”',
      imagePlaceholderUrl: 'https://via.placeholder.com/60x60?text=PN',
      rating: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Basic IntersectionObserver for entry animation of cards (if not doing a slider first)
    // If implementing a slider, this might change or be part of slider's active slide animation.
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the item is visible
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Staggering for entry:
          (entry.target as HTMLElement).style.transitionDelay = `${index * 100}ms`;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (this.testimonialCards) { // Check if QueryList is populated
        this.testimonialCards.forEach(card => {
            if(card && card.nativeElement) {
                 this.observer.observe(card.nativeElement);
            }
        });
    }
  }

  // Helper for star ratings
  getStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }
}
