import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      name: 'MiTravel',
      description: 'Collaborative Trip Planning',
      link: { href: 'https://plan.mitravelapp.com/', label: 'plan.mitravelapp.com' },
    },
    {
      name: 'Donations Platform - Kerenhatzedaka',
      description: 'IVR & CRM for managing Donations. Integrates with cardknox, clover etc',
      link: { href: 'https://crm.kerenhatzedakah.org/', label: 'kerenhatzedakah.org' },
    },
    {
      name: 'Ecency',
      description: 'BlockChain Based Social Media',
      link: { href: 'https://ecency.com/', label: 'ecency.com' },
    },
    {
      name: 'AKP',
      description: 'Facilitates Automated Checkins & Document Signing for patients',
      link: { href: 'https://alwayskeepprogressing.com/', label: 'alwayskeepprogressing.com' },
    },
    {
      name: 'OBO',
      description:
        'Facilitates Lead Generation using dynamically embedded form for multiple partners & a Portal to track leads and their stats',
      link: { href: 'https://onlinebusinessowner.com/', label: 'onlinebusinessowner.com' },
    },
  ];
}
