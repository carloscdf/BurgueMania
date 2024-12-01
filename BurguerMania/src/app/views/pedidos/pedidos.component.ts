import { Component } from '@angular/core';

import { TitleComponent } from '../../components/title/title.component';
import { ItemStatusComponent } from '../../components/item-status/item-status.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [TitleComponent, ItemStatusComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  title:string = "Status de pedidos";
}
