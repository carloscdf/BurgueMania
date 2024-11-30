import { Component, inject, Input} from '@angular/core';

import { Burguer } from '../../interfaces/burguer';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() showAll: boolean = false;
  @Input() burguersList!:Burguer[];
  constructor(){}
}
