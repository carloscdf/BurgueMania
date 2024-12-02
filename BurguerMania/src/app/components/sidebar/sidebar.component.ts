import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isVisible!:string;
  @Output() isVisibleUptade = new EventEmitter<string>();

  isSidebarVisible(){
    if(this.isVisible === 'block'){
      this.isVisible = 'none';
      this.isVisibleUptade.emit(this.isVisible);
    } else{
      this.isVisible = 'block';
      this.isVisibleUptade.emit(this.isVisible);
    }
  }
}
