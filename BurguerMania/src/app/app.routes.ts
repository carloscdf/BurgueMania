import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesPageComponent } from './views/categories-page/categories-page.component';
import { MenuItensComponent } from './views/menu-itens/menu-itens.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Página inicial'},
    {path: 'categories', component: CategoriesPageComponent, title: 'Categorias'},
    {path: 'menu', component: MenuItensComponent, title: 'Cardápio'}
];
