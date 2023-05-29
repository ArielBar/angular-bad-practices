import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, first, Subject, Subscription, tap, withLatestFrom} from 'rxjs';

@Component({
  selector: 'app-subscribe-in-click',
  templateUrl: './subscribe-in-click.component.html',
  styleUrls: ['./subscribe-in-click.component.scss']
})
export class SubscribeInClickComponent implements OnInit, OnDestroy {

  private _innerValue = 0;

  private _subscription = new Subscription();

  private _mySubject$$ = new BehaviorSubject<number>(this._innerValue);

  mySubject$=
     this._mySubject$$.asObservable().pipe(
      tap(value => {
        this.subjectCounter++;
      }));


  subjectCounter = 0;
  subscriptionCounter = 0

  constructor() {
  }

  //#region wrong

  ngOnInit(): void {
  }

  pushNextValue() {
      this._mySubject$$.next(this._innerValue++);
  }

  doSomethingWithData(event: Event) {
    this._subscription = this.mySubject$.subscribe(value => {

      //#region small fix
      // will still cause selector to fire every time
      // this._subscription = this.mySubject$.pipe(first()).subscribe(value => {
      //#endregion

      // do something very important with value like:
      console.log(value);
      this.subscriptionCounter++;
    });
  }

//#endregion

  //#region FIX

  // private _doSomethingClicked$$ = new Subject<Event>();
  //
  // ngOnInit(): void {
  //   this._subscription = this._doSomethingClicked$$.pipe(
  //     withLatestFrom(this.mySubject$))
  //     .subscribe(([event, value]) => {
  //       // do something very important with value like:
  //       console.log(value);
  //       this.subscriptionCounter++;
  //     });
  // }
  //
  // pushNextValue() {
  //   this._mySubject$$.next(this._innerValue++);
  // }
  //
  // doSomethingWithData(event: Event) {
  //   this._doSomethingClicked$$.next(event);
  // }

//#endregion
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
