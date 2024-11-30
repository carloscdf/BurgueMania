import { Component, Input } from '@angular/core';

import { Burguer } from '../../interfaces/burguer';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  @Input() burguer!:Burguer;
}

