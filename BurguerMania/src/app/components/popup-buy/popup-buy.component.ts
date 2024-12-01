import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { Burguer } from '../../interfaces/burguer';
import { BuyFinalStepperComponent } from '../buy-final-stepper/buy-final-stepper.component';
import { StepperComponent } from '../stepper/stepper.component';
import { SimpleChanges } from '@angular/core';

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

  constructor() {}

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
}
