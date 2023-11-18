import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOverallOrdersViewComponent } from './orders-overall-orders-view.component';

describe('OrdersOverallOrdersViewComponent', () => {
  let component: OrdersOverallOrdersViewComponent;
  let fixture: ComponentFixture<OrdersOverallOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersOverallOrdersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersOverallOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
