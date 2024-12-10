import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucheService } from 'src/app/embauche.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv!: Cv;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  embaucher() {
    this.embaucheService.embaucher(this.cv);
  }
  moreInfo() {
    const link = ['cv', this.cv.id];
    this.router.navigate(link);
  }
}
