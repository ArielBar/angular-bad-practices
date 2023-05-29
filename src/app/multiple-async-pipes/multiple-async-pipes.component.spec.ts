import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAsyncPipesComponent } from './multiple-async-pipes.component';

describe('MultipleAsyncPipesComponent', () => {
  let component: MultipleAsyncPipesComponent;
  let fixture: ComponentFixture<MultipleAsyncPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleAsyncPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleAsyncPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
