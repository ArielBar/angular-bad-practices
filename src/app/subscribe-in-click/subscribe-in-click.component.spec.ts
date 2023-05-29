import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeInClickComponent } from './subscribe-in-click.component';

describe('SubscribeInClickComponent', () => {
  let component: SubscribeInClickComponent;
  let fixture: ComponentFixture<SubscribeInClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeInClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeInClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
