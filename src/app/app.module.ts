import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvComponent } from './cvExercice/cv/cv.component';
import { ListeComponent } from './cvExercice/liste/liste.component';
import { ItemComponent } from './cvExercice/item/item.component';
import { DetailComponent } from './cvExercice/detail/detail.component';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './cvExercice/embauche/embauche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { PageDetailComponent } from './cvExercice/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    PageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
