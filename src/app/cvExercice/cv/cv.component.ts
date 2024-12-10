import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv!: Cv;
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
    console.log('CvComponent Initialized', this.cvs);
  }
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
