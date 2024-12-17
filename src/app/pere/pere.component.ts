import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent {
  color: string='red';
  backgroundcolor: string='';
  showbackground(value: any){
    this.backgroundcolor=value;
  }
}
