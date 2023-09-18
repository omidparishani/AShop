import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Output() selectedRecpie: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onSelectRecipe() {
    this.selectedRecpie.emit(this.recipe);
  }
}
