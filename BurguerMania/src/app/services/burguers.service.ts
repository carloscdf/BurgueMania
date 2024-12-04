import { Injectable } from '@angular/core';

import { Burguer } from '../interfaces/burguer';

@Injectable({
  providedIn: 'root'
})
export class BurguersService {
  url = 'http://localhost:5157/api/Produtos';

  constructor() { }
  async getAllBurguers(): Promise<Burguer[]> {
    try {
      const data = await fetch(this.url); //faz uma requisição fetch para a url especificada
      if (!data.ok) {
        throw new Error(`Erro na requisição: ${data.status}`);
      }
      return data.json(); //retorna os dados no formato json
    } catch (error) {
      console.error('Erro ao buscar hambúrgueres:', error);
      return []; // Retorna uma lista vazia em caso de erro
    }
  }

  async getBurguersByCategoria(categoriaId: number): Promise<Burguer[]> {
    const allBurguers = await this.getAllBurguers(); // Supondo que você tenha um método que busca todos os hambúrgueres
    return allBurguers.filter(burguer => burguer.categoriaId === categoriaId);
  }
  

  async getBurguerById(id: number): Promise<Burguer | undefined> {
    try {
      const data = await fetch(`${this.url}/${id}`);
      if (!data.ok) { 
        throw new Error(`Erro na requisição: ${data.status}`);
      }
      console.log("Hamburguer Encontrado");
      return data.json();  
    } catch (error) {
      console.error('Erro ao buscar hambúrgueres por id:', error);
      return undefined;  
    }
  }
}
