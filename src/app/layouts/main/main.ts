import { Component } from '@angular/core';
import { PortfolioContainer } from '../../portfolio-container/portfolio-container';
import { Router, RouterModule } from '@angular/router';
import { ArrowDown } from "../../icons/arrow-down/arrow-down";

@Component({
  selector: 'app-main',
  imports: [RouterModule, ArrowDown],
  templateUrl: './main.html',
  styleUrl: './main.css',

})
export class Main {
  constructor(public router: Router) {}
}
