import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv!: Cv;
  @Output() selectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('cv', this.cv);
  }
  selectCv(): void {
    this.selectedCv.emit(this.cv);
  }
}
