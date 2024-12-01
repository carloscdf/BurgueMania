import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Burguer } from '../../interfaces/burguer';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  @Input() burguer!:Burguer;
}

