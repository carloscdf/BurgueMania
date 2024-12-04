import { Component, inject } from '@angular/core';

import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BurguersService } from '../../services/burguers.service';
import { Burguer } from '../../interfaces/burguer';
import { CategoriesService } from '../../services/categories.service';
import { Categories } from '../../interfaces/categories';
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
  title!: string;
  showAll = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  burguersList: Burguer[] = [];
  burguersService: BurguersService = inject(BurguersService);
  categoriesList!: Categories[];
  categoriesService: CategoriesService = inject(CategoriesService);

  constructor() {
    const categoriaId = Number(this.route.snapshot.params['categoriaId']);

    // Carrega hambúrgueres apenas da categoria selecionada
    this.burguersService.getBurguersByCategoria(categoriaId).then((burguer) => {
      this.burguersList = burguer; // Lista filtrada
    });

    // Carrega todas as categorias e define o título
    this.categoriesService.getAllCategories().then((categories) => {
      this.categoriesList = categories;

      // Procura a categoria correspondente pelo ID
      const categoria = this.categoriesList.find(cat => cat.id === categoriaId);
      this.title = categoria ? `Hambúrgueres ${categoria.nome}` : 'Categoria não encontrada';
    });
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
