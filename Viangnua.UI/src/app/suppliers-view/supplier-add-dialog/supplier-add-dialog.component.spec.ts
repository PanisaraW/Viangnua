import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAddDialogComponent } from './supplier-add-dialog.component';

describe('SupplierAddDialogComponent', () => {
  let component: SupplierAddDialogComponent;
  let fixture: ComponentFixture<SupplierAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
