import { Component } from '@angular/core';

import { LocationComponent } from '../../components/location/location.component';


@Component({
  selector: 'app-location-contact',
  standalone: true,
  imports: [LocationComponent],
  templateUrl: './location-contact.component.html',
  styleUrl: './location-contact.component.css'
})
export class LocationContactComponent {

}
