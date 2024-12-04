import { Component, inject, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Burguer } from '../../interfaces/burguer';
import { Categories } from '../../interfaces/categories';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() showAll: boolean = false;
  @Input() burguersList!:Burguer[];
  @Input() categoriesList!:Categories[];
  constructor(){
  }

  getCategoryName(categoriaId: number): string {
    const categoria = this.categoriesList?.find(cat => cat.id === categoriaId);
    return categoria ? categoria.nome : 'Categoria desconhecida';
  }

  trackById(index: number, item: Burguer): number {
    return item.id;
  }
}
