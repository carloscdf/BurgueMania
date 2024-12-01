import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBuyComponent } from './popup-buy.component';

describe('PopupBuyComponent', () => {
  let component: PopupBuyComponent;
  let fixture: ComponentFixture<PopupBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
