import { Component, inject } from '@angular/core';

import { ItemDetailComponent } from '../../components/item-detail/item-detail.component';
import { TitleComponent } from '../../components/title/title.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { BuyButtonComponent } from '../../components/buy-button/buy-button.component';
import { Burguer } from '../../interfaces/burguer';
import { BurguersService } from '../../services/burguers.service';
import { ActivatedRoute } from '@angular/router';
import { PopupBuyComponent } from '../../components/popup-buy/popup-buy.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ItemDetailComponent, TitleComponent, DescriptionComponent, BuyButtonComponent, PopupBuyComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  title:string = "Detalhes";
  popupVisibility:string = 'none';
  route: ActivatedRoute = inject(ActivatedRoute);
  burguer!:Burguer;
  burguerService: BurguersService = inject(BurguersService);

  constructor(){
    const id = Number(this.route.snapshot.params['id']);
        // chamando o método para buscar o hamburguer do serviço
        this.burguerService.getBurguerById(id).then((burguer) => {
          if(burguer !== undefined){
            this.burguer = burguer;
          }
        });
  }

  isPopupVisible():void{
    if(this.popupVisibility === 'none'){
      this.popupVisibility = 'flex';
    } else{
      this.popupVisibility = 'none';
    }
  }

  onPopupVisibilityChange(newVisibility:string):void{
    this.popupVisibility = newVisibility;
  }

  
}
