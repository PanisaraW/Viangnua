import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOrderSummaryViewComponent } from './main-order-summary-view.component';

describe('MainOrderSummaryViewComponent', () => {
  let component: MainOrderSummaryViewComponent;
  let fixture: ComponentFixture<MainOrderSummaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainOrderSummaryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainOrderSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
