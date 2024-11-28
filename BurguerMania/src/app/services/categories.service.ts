import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:3000/Categories';
  constructor() { }
  async getAllCategories(): Promise<Categories[]>{
    const data = await fetch(this.url); //faz uma requisição fetch para a url especificada
    return data.json(); //retorna os dados no formato json
  }

  async getCategoriesById(id: number):Promise<Categories | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }
}
