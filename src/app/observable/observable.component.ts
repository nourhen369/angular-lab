import { Component, Input , OnInit } from '@angular/core';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  @Input() images: string[] = []; 
  @Input() intervalTime: number = 1000; 
  @Input() width: string = '200px'; 
  @Input() height: string = '400px';
  
  image : string='';
  monobservable!:Observable<string> ;
  ngOnInit():void{
 this.monobservable = new Observable(
  (observer) => {
    let i = this.images.length - 1;
    interval(this.intervalTime).subscribe(
      () => {
        observer.next(this.images[i]);
        if(i > 0) {
        i--;
        }
        else {
          i = this.images.length - 1;
        }
      });
  });

 this.monobservable.subscribe(
  (result) => {
    this.image =result;
 });
}
}