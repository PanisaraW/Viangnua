import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLowQuantityStockViewComponent } from './main-low-quantity-stock-view.component';

describe('MainLowQuantityStockViewComponent', () => {
  let component: MainLowQuantityStockViewComponent;
  let fixture: ComponentFixture<MainLowQuantityStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLowQuantityStockViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLowQuantityStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
