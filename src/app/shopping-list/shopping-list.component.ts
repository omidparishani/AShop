import { Component } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('بسته ماکارونی', 1),
    new Ingredient('پیاز', 2),
  ];
}
