import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerTypeComponent } from './burguer-type.component';

describe('BurguerTypeComponent', () => {
  let component: BurguerTypeComponent;
  let fixture: ComponentFixture<BurguerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurguerTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
