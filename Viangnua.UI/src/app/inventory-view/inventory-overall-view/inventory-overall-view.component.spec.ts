import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOverallViewComponent } from './inventory-overall-view.component';

describe('InventoryOverallViewComponent', () => {
  let component: InventoryOverallViewComponent;
  let fixture: ComponentFixture<InventoryOverallViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryOverallViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryOverallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
