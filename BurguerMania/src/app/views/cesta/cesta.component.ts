import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ItemPedidoComponent } from '../../components/item-pedido/item-pedido.component';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [TitleComponent, ItemPedidoComponent],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  title: string = "cesta";
}
