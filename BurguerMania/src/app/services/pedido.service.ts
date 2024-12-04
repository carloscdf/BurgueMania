import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Pedidos } from '../interfaces/pedidos';
import { ProdutosPedido } from '../interfaces/produtos-pedido';
import { PedidosUsuario } from '../interfaces/pedidos-usuario';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl: string = 'http://seu-backend-api'; // URL do seu backend

  constructor(private http: HttpClient) {}

  // Método para criar um pedido
  criarPedido(usuarioId: number, produtos: number[]): Observable<Pedidos> {
    const pedidoData: Pedidos = {
      valor: 0, // O valor pode ser calculado depois
      statusId: 1,
      id: 0
    };

    return this.http.post<Pedidos>(`${this.apiUrl}/pedidos`, pedidoData).pipe(
      // Após criar o pedido, criar o relacionamento PedidoUsuario e ProdutoPedido
      switchMap((pedido) => {
        // Criar o relacionamento PedidoUsuario
        const pedidoUsuarioData: PedidosUsuario = {
          usuarioId: usuarioId,
          pedidoId: pedido.id,
        };

        // Criar o relacionamento PedidoUsuario
        this.criarPedidoUsuario(pedidoUsuarioData);

        // Criar o relacionamento ProdutoPedido para cada produto
        const produtoPedidoRequests: Observable<ProdutosPedido>[] = produtos.map(
          (produtoId) => {
            const produtoPedidoData: ProdutosPedido = {
              produtoId: produtoId,
              pedidoId: pedido.id,
            };
            return this.criarProdutoPedido(produtoPedidoData);
          }
        );

        // Executar as requisições ProdutoPedido
        return forkJoin(produtoPedidoRequests).pipe(
          map(() => pedido) // Retornar o pedido após os relacionamentos serem criados
        );
      })
    );
  }

  // Criar relacionamento PedidoUsuario
  private criarPedidoUsuario(data: PedidosUsuario): Observable<PedidosUsuario> {
    return this.http.post<PedidosUsuario>(
      `${this.apiUrl}/pedido-usuario`,
      data
    );
  }

  // Criar relacionamento ProdutoPedido
  private criarProdutoPedido(data: ProdutosPedido): Observable<ProdutosPedido> {
    return this.http.post<ProdutosPedido>(
      `${this.apiUrl}/produto-pedido`,
      data
    );
  }

  // Método para atualizar o valor do pedido após adicionar os produtos
  atualizarValorPedido(pedidoId: number, valor: number): Observable<Pedidos> {
    return this.http.put<Pedidos>(`${this.apiUrl}/pedidos/${pedidoId}`, { valor });
  }
}
