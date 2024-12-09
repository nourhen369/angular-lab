import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv!: Cv;
  constructor() {}
  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'Ines', 'Zghal', 22, 123456, 'Designer', 'assets/ines.jpg'),
      new Cv(
        2,
        'Nourhene',
        'Khechine',
        20,
        654321,
        'Developer',
        'assets/nourhene.jpg'
      ),
    ];
    console.log('CvComponent Initialized', this.cvs);
  }
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
