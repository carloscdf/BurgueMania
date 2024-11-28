import { Component } from '@angular/core';

import { BannerComponent } from '../../components/banner/banner.component';
import { MainButtonsComponent } from '../../components/main-buttons/main-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, MainButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
