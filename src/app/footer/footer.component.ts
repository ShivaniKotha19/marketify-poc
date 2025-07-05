import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';

interface FooterLink {
  text: string;
  href: string;
}

interface SocialLink {
  iconClass: string; // e.g., 'bi bi-twitter'
  href: string;
  label: string; // for aria-label or title
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {

  productLinks: FooterLink[] = [
    { text: 'Brand API', href: '#' },
    { text: 'Logo Fetcher', href: '#' },
    { text: 'Color Extractor', href: '#' },
    { text: 'Font Analyzer', href: '#' }
  ];

  developerLinks: FooterLink[] = [
    { text: 'Documentation', href: '#' },
    { text: 'API Reference', href: '#' },
    { text: 'SDKs', href: '#' },
    { text: 'Code Examples', href: '#' }
  ];

  companyLinks: FooterLink[] = [
    { text: 'About Us', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Contact', href: '#' }
  ];

  legalLinks: FooterLink[] = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Cookie Policy', href: '#' },
    { text: 'GDPR', href: '#' }
  ];

  socialLinks: SocialLink[] = [
    { iconClass: 'bi bi-twitter', href: '#', label: 'Twitter' },
    { iconClass: 'bi bi-linkedin', href: '#', label: 'LinkedIn' },
    { iconClass: 'bi bi-facebook', href: '#', label: 'Facebook' }
  ];

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
