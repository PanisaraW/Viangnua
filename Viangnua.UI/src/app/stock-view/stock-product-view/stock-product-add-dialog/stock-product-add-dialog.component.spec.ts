import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductAddDialogComponent } from './stock-product-add-dialog.component';

describe('InventoryProductAddDialogComponent', () => {
  let component: StockProductAddDialogComponent;
  let fixture: ComponentFixture<StockProductAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockProductAddDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockProductAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
