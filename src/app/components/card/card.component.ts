import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() cardClicked: EventEmitter<string> = new EventEmitter<string>();

  onCardClick(data: string) {
    this.cardClicked.emit(data);
  }
}
