import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriesPageComponent } from './views/categories-page/categories-page.component';
import { MenuItensComponent } from './views/menu-itens/menu-itens.component';
import { LocationContactComponent } from './views/location-contact/location-contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Página inicial'},
    {path: 'categories', component: CategoriesPageComponent, title: 'Categorias'},
    {path: 'menu', component: MenuItensComponent, title: 'Cardápio'},
    {path: 'location', component: LocationContactComponent, title: 'Localização e Contato'}
];
