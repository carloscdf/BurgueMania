import { Injectable } from '@angular/core';
import { Pedidos } from '../interfaces/pedidos';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedidosUrl: string = 'http://localhost:5157/api/Pedidos';
  pedidoUsuarioUrl: string = 'http://localhost:5157/api/PedidosUsuario';
  produtoPedidoUrl: string = 'http://localhost:5157/api/ProdutosPedido';

  constructor() {}

  // Método para criar um pedido
  async postPedido(valor: number, produtoId: number): Promise<Pedidos | undefined> {
    const response = await fetch(this.pedidosUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: valor,
        statusId: 1,
      }),
    });

    if (!response.ok) {
      console.error('Erro ao postar pedido:', response.status, response.statusText);
      return undefined;
    }

    const pedidoCriado: Pedidos = await response.json();

    // Chama as funções para relacionar Pedido com Produto e Usuário
    await this.postPedidoUsuario(pedidoCriado.id);
    await this.postProdutoPedido(produtoId, pedidoCriado.id);

    return pedidoCriado;
  }

  // Método para criar PedidoUsuario
  private async postPedidoUsuario(pedidoId: number): Promise<void> {
    const response = await fetch(this.pedidoUsuarioUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuarioId: 1, // ID do usuário fixo como 1
        pedidoId: pedidoId,
      }),
    });

    if (!response.ok) {
      console.error('Erro ao associar Pedido com Usuário:', response.status, response.statusText);
    }
  }

  // Método para criar ProdutoPedido
  private async postProdutoPedido(produtoId: number, pedidoId: number): Promise<void> {
    const response = await fetch(this.produtoPedidoUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        produtoId: produtoId,
        pedidoId: pedidoId,
      }),
    });

    if (!response.ok) {
      console.error('Erro ao associar Produto com Pedido:', response.status, response.statusText);
    }
  }
}
