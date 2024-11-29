import { Component, inject, Input} from '@angular/core';

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
  @Input() burguersList!:Burguer[];
  constructor(){}
}
