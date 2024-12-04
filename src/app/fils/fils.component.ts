import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
}
)

export class FilsComponent {
@Input()  external: string='';
myFavoriteColor: string='Blue';
@Output() colorbackground= new EventEmitter();
setparentbackgroundcolor(){
  this.colorbackground.emit(this.myFavoriteColor);
}
}