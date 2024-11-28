import { Component, inject, Input } from '@angular/core';

import { Categories } from '../../interfaces/categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input() showAll: boolean = false;
  categoriesList:Categories[] = [];
  categoriesService: CategoriesService =  inject(CategoriesService);


  constructor(){
    // chamando o método para buscar os álbuns do serviço
    this.categoriesService.getAllCategories().then((categrorie=>{
     this.categoriesList = categrorie;  // atribuindo os álbuns retornados à lista
   }))
 }

}
