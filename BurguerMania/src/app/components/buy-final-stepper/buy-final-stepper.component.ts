import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-final-stepper',
  standalone: true,
  imports: [],
  templateUrl: './buy-final-stepper.component.html',
  styleUrl: './buy-final-stepper.component.css'
})
export class BuyFinalStepperComponent {
  @Input() totalPrice!:string;
}
