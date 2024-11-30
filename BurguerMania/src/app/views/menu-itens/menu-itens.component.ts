import { Component, inject } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';
import { TitleComponent } from '../../components/title/title.component';

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


  constructor(){
    // chamando o método para buscar os haburguers do serviço
    this.burguersService.getAllBurguers().then((burguer=>{
     this.burguersList = burguer;  // atribuindo os hamburguers retornadas à lista
   }))
 }

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
