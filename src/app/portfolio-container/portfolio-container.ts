import { Component } from '@angular/core';
import { Github } from '../icons/github/github';
import { Linkedin } from '../icons/linkedin/linkedin';
import { Resume } from '../resume/resume';
import { ContactMe } from '../contact-me/contact-me';

@Component({
  selector: 'app-portfolio-container',
  standalone: true,
  imports: [Github, Linkedin, Resume, ContactMe],
  templateUrl: './portfolio-container.html',
  styleUrl: './portfolio-container.css'
})
export class PortfolioContainer {
  // Add any necessary properties or methods here
}
