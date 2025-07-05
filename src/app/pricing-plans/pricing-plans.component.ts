import { Component } from '@angular/core';

import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface PricingPlan {
  name: string;
  monthlyPrice: string; // Using string to accommodate "Custom"
  yearlyPrice: string;  // Using string to accommodate "Custom"
  priceSuffixMonthly: string;
  priceSuffixYearly: string;
  yearlySavingsNote?: string; // Optional
  features: string[];
  ctaText: string;
  iconClass: string; // Bootstrap Icon class
  isPopular?: boolean; // Optional
  ctaClass?: string; // For different button styling e.g. primary/secondary
}

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.html',
  styleUrls: ['./pricing-plans.css']
})
export class PricingPlansComponent implements OnInit, AfterViewInit {

  @ViewChildren('pricingCard') pricingCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  isYearlyBilled: boolean = false;

  pricingPlans: PricingPlan[] = [
    {
      name: 'Free Plan',
      monthlyPrice: '$0',
      yearlyPrice: '$0',
      priceSuffixMonthly: '/month',
      priceSuffixYearly: '/year',
      features: [
        'Limited brand lookups',
        'Basic brand asset preview',
        'No export options'
      ],
      ctaText: 'Start Free',
      iconClass: 'bi bi-box-seam', // Example icon
      ctaClass: 'btn-outline-primary' // Example: secondary button style
    },
    {
      name: 'Pro Plan',
      monthlyPrice: '$15',
      yearlyPrice: '$144',
      priceSuffixMonthly: '/month',
      priceSuffixYearly: '/year',
      yearlySavingsNote: 'save 20%',
      features: [
        'Unlimited brand lookups',
        'Export as JSON/HTML/XML',
        'Access to color palettes and fonts',
        'Email support'
      ],
      ctaText: 'Upgrade to Pro',
      iconClass: 'bi bi-gem', // Example icon
      isPopular: true,
      ctaClass: 'btn-primary' // Example: primary button style
    },
    {
      name: 'Enterprise Plan',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      priceSuffixMonthly: '', // No suffix for "Custom"
      priceSuffixYearly: '',
      features: [
        'Everything in Pro',
        'Team collaboration tools',
        'API access with SLA',
        'Dedicated support & onboarding'
      ],
      ctaText: 'Contact Sales',
      iconClass: 'bi bi-building', // Example icon
      ctaClass: 'btn-outline-secondary' // Example: different outline
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleBillingCycle(): void {
    this.isYearlyBilled = !this.isYearlyBilled;
  }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          (entry.target as HTMLElement).style.transitionDelay = `${index * 100}ms`;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (this.pricingCards) {
      this.pricingCards.forEach(card => {
        if (card && card.nativeElement) {
          this.observer.observe(card.nativeElement);
        }
      });
    }
  }
}
