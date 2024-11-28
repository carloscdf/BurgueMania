import { Injectable } from '@angular/core';

import { Burguers } from '../interfaces/burguers';

@Injectable({
  providedIn: 'root'
})
export class BurguersService {
  url = 'http://localhost:3000/Burguers';
  constructor() { }
  async getAllBurguers(): Promise<Burguers[]>{
    const data = await fetch(this.url); //faz uma requisição fetch para a url especificada
    return data.json(); //retorna os dados no formato json
  }

  async getBurguersById(id: number):Promise<Burguers | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }
}
