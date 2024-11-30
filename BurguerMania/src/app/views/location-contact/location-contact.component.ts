import { Component } from '@angular/core';

import { LocationComponent } from '../../components/location/location.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-location-contact',
  standalone: true,
  imports: [LocationComponent, TitleComponent],
  templateUrl: './location-contact.component.html',
  styleUrl: './location-contact.component.css'
})
export class LocationContactComponent {
  title:string = "Localização e contato";
}
