import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoComponent } from './item-pedido.component';

describe('ItemPedidoComponent', () => {
  let component: ItemPedidoComponent;
  let fixture: ComponentFixture<ItemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
