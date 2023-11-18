import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryProductAddDialogComponent } from './inventory-product-add-dialog.component';

describe('InventoryProductAddDialogComponent', () => {
  let component: InventoryProductAddDialogComponent;
  let fixture: ComponentFixture<InventoryProductAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryProductAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryProductAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
