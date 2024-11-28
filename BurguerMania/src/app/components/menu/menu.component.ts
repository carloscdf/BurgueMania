import { Component, inject, Input} from '@angular/core';

import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() showAll: boolean = false;
  burguersList:Burguer[] = [];
  burguersService: BurguersService =  inject(BurguersService);


  constructor(){
    // chamando o método para buscar os haburguers do serviço
    this.burguersService.getAllBurguers().then((burguer=>{
     this.burguersList = burguer;  // atribuindo os hamburguers retornadas à lista
   }))
 }
}
