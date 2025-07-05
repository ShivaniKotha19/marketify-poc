import { Component } from '@angular/core';

import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  templateUrl: './cta-banner.html',
  styleUrls: ['./cta-banner.css']
})
export class CtaBannerComponent implements OnInit, AfterViewInit {
  @ViewChild('ctaBannerSection') ctaBannerSection!: ElementRef;
  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the section is visible
    };

    this.observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ctaBannerSection.nativeElement.classList.add('is-visible');
          observerInstance.unobserve(this.ctaBannerSection.nativeElement); // Stop observing once visible
        }
      });
    }, options);

    if (this.ctaBannerSection && this.ctaBannerSection.nativeElement) {
      this.observer.observe(this.ctaBannerSection.nativeElement);
    }
  }
}
