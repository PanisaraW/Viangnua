import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryProfitRevenueViewComponent } from './sales-history-profit-revenue-view.component';

describe('SalesHistoryProfitRevenueViewComponent', () => {
  let component: SalesHistoryProfitRevenueViewComponent;
  let fixture: ComponentFixture<SalesHistoryProfitRevenueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesHistoryProfitRevenueViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesHistoryProfitRevenueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
