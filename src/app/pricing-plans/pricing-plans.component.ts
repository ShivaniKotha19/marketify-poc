

import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface PricingPlan {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  ctaText: string;
  iconClass?: string; // Optional Bootstrap Icon class for a small plan icon/badge
  isPopular?: boolean;
  ctaClass: string;
}

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.html',
  styleUrls: ['./pricing-plans.css']
})
export class PricingPlansComponent implements OnInit, AfterViewInit {

  @ViewChildren('pricingCard') pricingCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  // isYearlyBilled: boolean = false; // Removed

  pricingPlans: PricingPlan[] = [
    {
      name: 'Developer Plan',
      price: '$29/month',
      tagline: 'Perfect for individual developers and small projects',
      features: [
        '10,000 API requests/month',
        'Basic brand data access',
        'Email support',
        'Standard rate limits',
        'Community access'
      ],
      ctaText: 'Start Free Trial',
      iconClass: 'bi bi-person-gear', // Example icon
      isPopular: false,
      ctaClass: 'btn-main-gradient'
    },
    {
      name: 'Pro Plan',
      price: '$99/month',
      tagline: 'Best for growing teams and businesses',
      features: [
        '100,000 API requests/month',
        'Premium brand data + analytics',
        'Priority support',
        'Higher rate limits',
        'Advanced integrations',
        'Custom webhooks'
      ],
      ctaText: 'Start Free Trial',
      iconClass: 'bi bi-people-fill', // Example icon
      isPopular: true,
      ctaClass: 'btn-main-gradient' // Standardized gradient class
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom pricing',
      tagline: 'For large organizations with custom needs',
      features: [
        'Unlimited API requests',
        'Full brand data suite',
        'Dedicated support manager',
        'Custom rate limits',
        'SLA guarantees',
        'On-premise deployment',
        'Custom integrations'
      ],
      ctaText: 'Contact Sales',
      iconClass: 'bi bi-briefcase-fill', // Example icon
      isPopular: false,
      ctaClass: 'btn-main-gradient' // Standardized gradient class
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // toggleBillingCycle(): void { // Removed
  //   this.isYearlyBilled = !this.isYearlyBilled;
  // }

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
