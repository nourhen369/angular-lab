import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  @Input() textColor: string = '000000'; // Couleur par défaut
  @Input() fontSize: number = 16; // Taille par défaut
  @Input() fontFamily: string = 'Arial'; // Police par défaut
  fonts: string[] = [
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Verdana',
  ];
}
