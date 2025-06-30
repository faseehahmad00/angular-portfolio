import { Component } from '@angular/core';
import { Linkedin } from '../icons/linkedin/linkedin';
import { Github } from "../icons/github/github";

@Component({
  selector: 'app-about-page',
  imports: [Linkedin, Github],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {
  metadata = {
    title: 'About',
    description: 'I’m Faseeh Ahmad'
  };

  socialLinks = [
    {
      href: 'https://github.com/faseehahmad00/',
      label: 'Follow on GitHub',
      icon: 'github',
    },
    {
      href: 'https://www.linkedin.com/in/faseehahmad00',
      label: 'Follow on LinkedIn',
      icon: 'linkedin',
    },
    {
      href: 'mailto:contact@faseeh.dev',
      label: 'contact@faseeh.dev',
      icon: 'mail',
      isEmail: true,
    },
  ];
}
