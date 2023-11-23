import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryViewComponent } from './sales-history-view.component';

describe('ReportsViewComponent', () => {
  let component: SalesHistoryViewComponent;
  let fixture: ComponentFixture<SalesHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesHistoryViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
