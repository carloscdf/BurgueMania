import { Component, inject } from '@angular/core';

import { CategoriesComponent } from '../../components/categories/categories.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TitleComponent } from '../../components/title/title.component';
import { Categories } from '../../interfaces/categories';
import { CategoriesService } from '../../services/categories.service';

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
  categoriesList:Categories[] = [];
  categoriesService:CategoriesService = inject(CategoriesService);

  constructor(){
    this.categoriesService.getAllCategories().then((categories)=>{
      this.categoriesList = categories;
    })
  }

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
