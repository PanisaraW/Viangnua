import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOrdersDetailsViewComponent } from './orders-orders-details-view.component';

describe('OrdersOrdersDetailsViewComponent', () => {
  let component: OrdersOrdersDetailsViewComponent;
  let fixture: ComponentFixture<OrdersOrdersDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersOrdersDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersOrdersDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
