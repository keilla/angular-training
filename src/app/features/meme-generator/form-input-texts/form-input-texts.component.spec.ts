import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputTextsComponent } from './form-input-texts.component';

describe('FormInputTextsComponent', () => {
  let component: FormInputTextsComponent;
  let fixture: ComponentFixture<FormInputTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
