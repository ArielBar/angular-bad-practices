import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() show = false;

  lines = Array(100);
  constructor() {
  }

  ngOnInit(): void {

  }

  verySlowFunc() {
    console.log('in a very slow function');
    let counter = 0;
    while (counter < 999999999) {
      counter++;
    }
  }
}
