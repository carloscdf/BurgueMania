import { Component, Input, EventEmitter, Output, inject } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { Burguer } from '../../interfaces/burguer';
import { BuyFinalStepperComponent } from '../buy-final-stepper/buy-final-stepper.component';
import { StepperComponent } from '../stepper/stepper.component';
import { SimpleChanges } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedidos } from '../../interfaces/pedidos';

@Component({
  selector: 'app-popup-buy',
  standalone: true,
  imports: [CurrencyPipe, StepperComponent, BuyFinalStepperComponent],
  templateUrl: './popup-buy.component.html',
  styleUrl: './popup-buy.component.css'
})
export class PopupBuyComponent {
  @Input() burguer!:Burguer;
  @Input() popupVisibility:string = 'none';
  @Output() popupVisibilityChange = new EventEmitter<string>();
  quantity!:number;
  totalPrice!:string;
  price!:number;
  pedidoServide: PedidoService = inject (PedidoService);

  constructor() {
    
  }

  // Detecta mudanças em `burguer` e atualiza `totalPrice`
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['burguer'] && this.burguer) {
      this.totalPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(this.burguer.preco);
    }
  }

  newQuantity(quantity:number):void{
    this.quantity = quantity;
    this.itemTotalPrice();
  }

  itemTotalPrice(){
    this.totalPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.burguer.preco * this.quantity);
    console.log(this.totalPrice);
  }

  isPopupVisible():void{
    if(this.popupVisibility === 'flex'){
      this.popupVisibility = 'none';
    } else{
      this.popupVisibility = 'none';
    }
    this.popupVisibilityChange.emit(this.popupVisibility);
  }

  postPedido(): void {
    this.price = (this.burguer.preco * this.quantity);
  
    this.pedidoServide.postPedido(this.price, this.burguer.id).then((pedidoCriado) => {
      if (pedidoCriado) {
        console.log('Pedido criado com sucesso:', pedidoCriado);
        // Aqui você pode implementar uma mensagem de sucesso ou fechar o popup
      } else {
        console.error('Erro ao criar o pedido');
        // Exibir uma mensagem de erro para o usuário
      }
    }).catch((error) => {
      console.error('Erro inesperado ao criar pedido:', error);
    });
  }
  
}
