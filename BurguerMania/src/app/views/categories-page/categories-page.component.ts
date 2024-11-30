import { Component } from '@angular/core';

import { CategoriesComponent } from '../../components/categories/categories.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CategoriesComponent, ButtonComponent, TitleComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  title:string = "Categorias";
  showAll:boolean = false;

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
