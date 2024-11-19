import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  color: string = '';

  changeColor(newColor: string) {
    this.color = newColor;
  }

  resetColor() {
    this.color = '';
  }
}
