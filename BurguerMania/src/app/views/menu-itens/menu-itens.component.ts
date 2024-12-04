import { Component, inject } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';
import { TitleComponent } from '../../components/title/title.component';
import { Categories } from '../../interfaces/categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-menu-itens',
  standalone: true,
  imports: [MenuComponent, ButtonComponent, TitleComponent],
  templateUrl: './menu-itens.component.html',
  styleUrl: './menu-itens.component.css'
})

export class MenuItensComponent {
  title:string = "Cardápio - todos os itens";
  showAll = false;
  burguersList!:Burguer[];
  burguersService: BurguersService =  inject(BurguersService);
  categoriesService: CategoriesService =  inject(CategoriesService);
  categoriesList!:Categories[];


  constructor(){
    // chamando o método para buscar os haburguers do serviço
    this.burguersService.getAllBurguers().then((burguer=>{
     this.burguersList = burguer;  // atribuindo os hamburguers retornadas à lista
   }))

   this.categoriesService.getAllCategories().then((categorie=>{
    this.categoriesList = categorie;  // atribuindo os hamburguers retornadas à lista
  }))
 }

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
