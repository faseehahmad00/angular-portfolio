import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-down',
  imports: [],
  templateUrl: './arrow-down.html',
  styleUrl: './arrow-down.css'
})
export class ArrowDown {
  @Input() class = '';
}
