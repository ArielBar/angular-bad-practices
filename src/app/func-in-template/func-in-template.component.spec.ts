import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncInTemplateComponent } from './func-in-template.component';

describe('FuncInTemplateComponent', () => {
  let component: FuncInTemplateComponent;
  let fixture: ComponentFixture<FuncInTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncInTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncInTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
