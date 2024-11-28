import { Component } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-menu-itens',
  standalone: true,
  imports: [MenuComponent, ButtonComponent],
  templateUrl: './menu-itens.component.html',
  styleUrl: './menu-itens.component.css'
})
export class MenuItensComponent {
  showAll = false;

  toggleShowAll(){
    this.showAll = !this.showAll;
  }
}
