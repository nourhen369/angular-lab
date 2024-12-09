import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"][appWriterainbow]'
})
export class WriterainbowDirective {
@HostBinding ('style.border-color') bc='';
@HostBinding ('style.color') c='';

  constructor() { }
  generatenewcolor():string {
   
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  }
  @HostListener('keyup')  onkeyup(){
   
this.c=this.generatenewcolor();
this.bc=this.generatenewcolor();
   

  }
}
