import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Main } from './layouts/main/main';
import { PortfolioContainer } from './portfolio-container/portfolio-container';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [Main, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
