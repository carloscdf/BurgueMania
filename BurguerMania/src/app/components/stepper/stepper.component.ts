import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  quantity:number = 1;
  @Output() quantityValue = new EventEmitter<number>();
  constructor(){
  }


  aumentarQuantidade(){
    this.quantity++;
    this.quantityValue.emit(this.quantity);
  }

  diminuirQuantidade(){
    this.quantity--;
    this.quantityValue.emit(this.quantity);
}

}