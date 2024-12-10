import { Component, OnInit } from '@angular/core';
import { EmbaucheService } from 'src/app/embauche.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent implements OnInit {
  cvs: Cv[] = [];
  constructor(private embaucheService: EmbaucheService) {}
  ngOnInit(): void {
    this.cvs = this.embaucheService.getEmbachees();
  }
}
