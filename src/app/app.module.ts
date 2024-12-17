import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';

import { FormAuthComponent } from './form-auth/form-auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    FormAuthComponent,

    FilsComponent,
    PereComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
