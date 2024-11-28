import { Component } from '@angular/core';

import { CategoriesComponent } from '../../components/categories/categories.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CategoriesComponent, ButtonComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  showAll = false;

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
