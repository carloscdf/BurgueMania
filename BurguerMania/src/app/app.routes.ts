import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesPageComponent } from './views/categories-page/categories-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Página inicial'},
    {path: 'categories', component: CategoriesPageComponent, title: 'Categorias'}
];
