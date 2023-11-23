import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryOverviewViewComponent } from './sales-history-overview-view.component';

describe('SalesHistoryOverviewViewComponent', () => {
  let component: SalesHistoryOverviewViewComponent;
  let fixture: ComponentFixture<SalesHistoryOverviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesHistoryOverviewViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesHistoryOverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
