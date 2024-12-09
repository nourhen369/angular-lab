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

@NgModule({
  declarations: [AppComponent, MiniWordComponent, CvComponent, ListeComponent, ItemComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
