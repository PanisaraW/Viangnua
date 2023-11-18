import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopSellingStockViewComponent } from './main-top-selling-stock-view.component';

describe('MainTopSellingStockViewComponent', () => {
  let component: MainTopSellingStockViewComponent;
  let fixture: ComponentFixture<MainTopSellingStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTopSellingStockViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTopSellingStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
