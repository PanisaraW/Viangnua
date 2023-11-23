import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOverallViewComponent } from './stock-overall-view.component';

describe('InventoryOverallViewComponent', () => {
  let component: StockOverallViewComponent;
  let fixture: ComponentFixture<StockOverallViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockOverallViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOverallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
