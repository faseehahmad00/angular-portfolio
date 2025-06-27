import { Component, Input } from '@angular/core';

@Component({
  selector: 'briefcase-icon',
  imports: [],
  templateUrl: './briefcase.html',
  styleUrl: './briefcase.css'
})
export class Briefcase {
  @Input() class = '';
}
