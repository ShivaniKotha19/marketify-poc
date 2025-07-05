import { Component } from '@angular/core';

import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  visualCueText: string; // For simple text/CSS based cue
}

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.css']
})
export class HowItWorksComponent implements OnInit, AfterViewInit {
  @ViewChildren('stepCard') stepCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  steps: HowItWorksStep[] = [
    {
      stepNumber: '1',
      title: 'Enter Domain',
      description: 'Type in the domain name of the company you want to fetch brand data for. Marketify instantly begins searching.',
      visualCueText: 'e.g., openai.com' // Represents an input bar
    },
    {
      stepNumber: '2',
      title: 'Fetch Brand Info',
      description: 'Marketify quickly pulls official brand assets including logos, fonts, color palettes, and metadata using our real-time engine.',
      visualCueText: '⚡ Fetching...' // Represents loading/fetching
    },
    {
      stepNumber: '3',
      title: 'Visualize Structured Results',
      description: 'View results in an intuitive UI with cards displaying logos, colors, and fonts, plus tabs for JSON, HTML, and XML output formats.',
      visualCueText: '[Logo] [Colors] [Fonts]' // Represents structured results
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the item is visible
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stagger based on index if needed, already handled by CSS for CoreFeatures, can do similarly
          // (entry.target as HTMLElement).style.transitionDelay = `${index * 150}ms`;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.stepCards.forEach(card => {
      this.observer.observe(card.nativeElement);
    });
  }
}
