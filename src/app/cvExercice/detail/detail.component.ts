import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv!: Cv;
  constructor() {}
  ngOnInit(): void {}
}
