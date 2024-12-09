import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Mini CV Platform';

  constructor() {
    console.log('AppComponent Constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent Initialized');
  }
}
