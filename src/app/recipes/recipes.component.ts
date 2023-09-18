import { Component, Input } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipe!: Recipe;
  onRecpieSelected(event: any) {
    this.recipe = event;
  }
}
