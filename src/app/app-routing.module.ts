import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvExercice/cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { PageDetailComponent } from './cvExercice/page-detail/page-detail.component';

const routes: Routes = [
  { path: 'cv/:id', component: PageDetailComponent },
  { path: 'cv', component: CvComponent },
  { path: 'color', component: MiniWordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
