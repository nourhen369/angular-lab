import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    FilsComponent,
    PereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
