import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryProductViewComponent } from './inventory-product-view.component';

describe('InventoryProductViewComponent', () => {
  let component: InventoryProductViewComponent;
  let fixture: ComponentFixture<InventoryProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryProductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
