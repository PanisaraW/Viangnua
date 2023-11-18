import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsProfitRevenueViewComponent } from './reports-profit-revenue-view.component';

describe('ReportsProfitRevenueViewComponent', () => {
  let component: ReportsProfitRevenueViewComponent;
  let fixture: ComponentFixture<ReportsProfitRevenueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsProfitRevenueViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsProfitRevenueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
