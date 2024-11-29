import { Component } from '@angular/core';

import { ItemDetailComponent } from '../../components/item-detail/item-detail.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ItemDetailComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
