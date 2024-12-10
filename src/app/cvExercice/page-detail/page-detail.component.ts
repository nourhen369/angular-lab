import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/cv.service';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {
  cv: Cv | undefined;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(params['id']);
    });
  }
  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.router.navigate(['/cv']);
    }
  }
}
