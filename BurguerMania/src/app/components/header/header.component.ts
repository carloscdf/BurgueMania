import { Component, EventEmitter } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isVisible:string = 'none';

  isSidebarVisible(){
    if(this.isVisible === 'none'){
      this.isVisible = 'block';
    } else {
      this.isVisible = 'none';
    }
  }

  isSidebarVisibleUptade(isVisible:string){
    this.isVisible = isVisible;
  }
}
