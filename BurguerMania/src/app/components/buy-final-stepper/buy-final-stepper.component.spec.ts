import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFinalStepperComponent } from './buy-final-stepper.component';

describe('BuyFinalStepperComponent', () => {
  let component: BuyFinalStepperComponent;
  let fixture: ComponentFixture<BuyFinalStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyFinalStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFinalStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
