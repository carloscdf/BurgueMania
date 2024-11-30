import { Injectable } from '@angular/core';

import { Burguer } from '../interfaces/burguer';

@Injectable({
  providedIn: 'root'
})
export class BurguersService {
  url = 'http://localhost:3000/Burguers';

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

  async getBurguersByType(tipo: string): Promise<Burguer[]> {
    try {
      const data = await fetch(`${this.url}?tipo=${tipo}`);
      if (!data.ok) {
        throw new Error(`Erro na requisição: ${data.status}`);
      }
      return data.json();
    } catch (error) {
      console.error('Erro ao buscar hambúrgueres por tipo:', error);
      return []; // Retorna uma lista vazia em caso de erro
    }
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
