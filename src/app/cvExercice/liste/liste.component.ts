import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() cvs: Cv[] = [];
  @Output() selectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('ListeComponent Initialized', this.cvs);
  }
  selectCv(selectedCv: Cv): void {
    this.selectedCv.emit(selectedCv);
  }
}
