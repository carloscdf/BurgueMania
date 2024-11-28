import { Injectable } from '@angular/core';

import { Burguer } from '../interfaces/burguer';

@Injectable({
  providedIn: 'root'
})
export class BurguersService {
  url = 'http://localhost:3000/Burguers';
  constructor() { }
  async getAllBurguers(): Promise<Burguer[]>{
    const data = await fetch(this.url); //faz uma requisição fetch para a url especificada
    return data.json(); //retorna os dados no formato json
  }

  async getBurguersById(id: number):Promise<Burguer | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }
}
