import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputTextsComponent } from './form-input-texts.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FormInputTextsComponent', () => {
  let component: FormInputTextsComponent;
  let fixture: ComponentFixture<FormInputTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputTextsComponent ],
      imports: [SharedModule]
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
