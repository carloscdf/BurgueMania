import { Component, inject } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-burguer-type',
  standalone: true,
  imports: [MenuComponent, ButtonComponent, TitleComponent],
  templateUrl: './burguer-type.component.html',
  styleUrl: './burguer-type.component.css'
})
export class BurguerTypeComponent {
  title: string = "";
  showAll = false;
  route:ActivatedRoute = inject(ActivatedRoute);
  burguersList:Burguer[] = [];
  burguersService: BurguersService =  inject(BurguersService);


  constructor(){
    const tipo = String(this.route.snapshot.params['tipo']);
    this.title = String(this.route.snapshot.params['tipo']);
    // chamando o método para buscar os haburguers do serviço
    this.burguersService.getBurguersByType(tipo).then((burguer=>{
     this.burguersList = burguer;  // atribuindo os hamburguers retornadas à lista
   }))
 }

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
