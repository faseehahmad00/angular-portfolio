import { Component } from '@angular/core';
import { ArrowDown } from '../icons/arrow-down/arrow-down';
import { Briefcase } from '../icons/briefcase/briefcase';

interface Role {
  company: string;
  title: string;
  logo: string;
  start: string;
  end: string | { label: string; dateTime: string };
}


@Component({
  selector: 'resume',
  imports: [ArrowDown, Briefcase],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})

export class Resume {
  resume: Role[] = [
    {
      company: 'Rolustech',
      title: 'Senior Software Engineer',
      logo: 'logort',
      start: '2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Rolustech',
      title: 'Software Engineer',
      logo: 'logort',
      start: '2023',
      end: '2025',
    },
    {
      company: 'Rolustech',
      title: 'Associate Software Engineer',
      logo: 'logort',
      start: '2022',
      end: '2023',
    },
    {
      company: 'Netsol Technologies',
      title: 'Database Intern',
      logo: 'logoFacebook',
      start: '2021',
      end: '2021',
    },
  ];

  getEnd(end: string | { label: string }): string {
    return typeof end === 'string' ? end : end.label;
  }
}
