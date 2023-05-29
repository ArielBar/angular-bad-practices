import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STOComponent } from './sto.component';

describe('STOComponent', () => {
  let component: STOComponent;
  let fixture: ComponentFixture<STOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
