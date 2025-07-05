import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';

interface ClientLogo {
  name: string;
  imageUrl: string;
  // actualUrl?: string; // Optional: link to client's website
}

@Component({
  selector: 'app-trusted-by',
  templateUrl: './trusted-by.html',
  styleUrls: ['./trusted-by.css']
})
export class TrustedByComponent implements OnInit {

  logos: ClientLogo[] = [
    { name: 'Google', imageUrl: 'https://via.placeholder.com/150x50?text=Google' },
    { name: 'Shopify', imageUrl: 'https://via.placeholder.com/150x50?text=Shopify' },
    { name: 'Zoom', imageUrl: 'https://via.placeholder.com/150x50?text=Zoom' },
    { name: 'Adobe', imageUrl: 'https://via.placeholder.com/150x50?text=Adobe' },
    { name: 'Microsoft', imageUrl: 'https://via.placeholder.com/150x50?text=Microsoft' }, // Added
    { name: 'Salesforce', imageUrl: 'https://via.placeholder.com/150x50?text=Salesforce' }  // Added
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
