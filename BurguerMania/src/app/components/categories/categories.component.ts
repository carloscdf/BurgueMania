import { Component, inject, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Categories } from '../../interfaces/categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input() showAll: boolean = false;
  categoriesList:Categories[] = [];
  categoriesService: CategoriesService =  inject(CategoriesService);


  constructor(){
    // chamando o método para buscar as categorias do serviço
    this.categoriesService.getAllCategories().then((categrorie=>{
     this.categoriesList = categrorie;  // atribuindo as categorias retornadas à lista
   }))
 }

}
