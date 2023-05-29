import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-func-holder',
  templateUrl: './func-holder.component.html',
  styleUrls: ['./func-holder.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class FuncHolderComponent implements OnInit {
  veryBadFuncCounter = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  veryBadFuncHere(): number {
    this.veryBadFuncCounter++;
    console.log('oh no!!!!');
    return this.veryBadFuncCounter;
  }
}
