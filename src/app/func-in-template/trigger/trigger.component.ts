import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class TriggerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  someCallback() {
    console.log('in callback in trigger component');
  }
}
