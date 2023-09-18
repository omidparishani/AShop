import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  recipeShow: boolean = true;

  onNavigation(event: any) {
    console.log(event);
    if (event == 'recipe') {
      this.recipeShow = true;
    } else {
      this.recipeShow = false;
    }
  }
}
