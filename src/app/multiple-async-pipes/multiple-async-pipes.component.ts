import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';

type Person = {
  firstName: string,
  lastName: string
}

type Address = {
  street: string;
  houseNumber: number;
}

@Component({
  selector: 'app-multiple-async-pipes',
  templateUrl: './multiple-async-pipes.component.html',
  styleUrls: ['./multiple-async-pipes.component.scss']
})
export class MultipleAsyncPipesComponent implements OnInit {
  person$ = new BehaviorSubject<Person>({
    firstName: 'Lior',
    lastName: 'Caspi'
  }).asObservable().pipe(tap(value=>{
    console.log('Person selector activated with alllll its logic');
  }));

  address$ = new BehaviorSubject<Address>({
   street: 'Begin',
    houseNumber: 7
  }).asObservable().pipe(tap(value=>{
    console.log('Address selector activated with alllll its logic');
  }));

  constructor() {
  }

  ngOnInit(): void {
  }

}
