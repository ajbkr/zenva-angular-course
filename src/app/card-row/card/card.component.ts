import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-card',
  selector: 'app-row-card',
  styleUrls: [
    './card.component.css'
  ],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() imageName: string;
  @Input() imageUrl: string;
}
