import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() recipeLoaded: EventEmitter<string> = new EventEmitter<string>();

  onSelect(value: string) {
    if (value == 'recipe') {
      this.recipeLoaded.emit('recipe');
    } else {
      this.recipeLoaded.emit('shopping-list');
    }
  }
}
