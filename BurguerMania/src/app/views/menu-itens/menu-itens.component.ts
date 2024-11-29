import { Component, inject } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';

@Component({
  selector: 'app-menu-itens',
  standalone: true,
  imports: [MenuComponent, ButtonComponent],
  templateUrl: './menu-itens.component.html',
  styleUrl: './menu-itens.component.css'
})
export class MenuItensComponent {
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
