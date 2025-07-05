
import { Component, OnInit } from '@angular/core';

interface TeamMember {
  roleTitle: string;
  roleDescription: string;
  keyPoints: string[];
  iconClass: string; // Bootstrap Icon class
}

@Component({
  selector: 'app-team-focus',
  templateUrl: './team-focus.html',
  styleUrls: ['./team-focus.css']
})
export class TeamFocusComponent implements OnInit {

  teamMembers: TeamMember[] = [
    {
      roleTitle: 'For Designers',
      roleDescription: 'Access brand guidelines, color palettes, and typography information to create consistent designs that align with brand standards.',
      keyPoints: [
        'Brand Guidelines',
        'Color Palettes',
        'Typography Info',
        'Design Assets'
      ],
      iconClass: 'bi bi-palette-fill' // Example icon
    },
    {
      roleTitle: 'For Developers',
      roleDescription: 'Integrate brand data directly into your applications with our simple REST API and comprehensive documentation.',
      keyPoints: [
        'REST API',
        'SDKs Available',
        'Code Examples',
        'Real-time Data'
      ],
      iconClass: 'bi bi-code-slash' // Example icon
    },
    {
      roleTitle: 'For Marketers',
      roleDescription: 'Streamline campaign creation with instant access to brand assets, ensuring consistent messaging across all channels.',
      keyPoints: [
        'Campaign Assets',
        'Brand Consistency',
        'Multi-format Export',
        'Team Collaboration'
      ],
      iconClass: 'bi bi-megaphone-fill' // Example icon
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
