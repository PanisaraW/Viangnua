import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryBestsellingProductViewComponent } from './sales-history-bestselling-product-view.component';

describe('SalesHistoryBestsellingProductViewComponent', () => {
  let component: SalesHistoryBestsellingProductViewComponent;
  let fixture: ComponentFixture<SalesHistoryBestsellingProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesHistoryBestsellingProductViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesHistoryBestsellingProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
