import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOrdersAddDialogComponent } from './orders-orders-add-dialog.component';

describe('OrdersOrdersAddDialogComponent', () => {
  let component: OrdersOrdersAddDialogComponent;
  let fixture: ComponentFixture<OrdersOrdersAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersOrdersAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersOrdersAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
