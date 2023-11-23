import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductViewComponent } from './stock-product-view.component';

describe('InventoryProductViewComponent', () => {
  let component: StockProductViewComponent;
  let fixture: ComponentFixture<StockProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockProductViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
