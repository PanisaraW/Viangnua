import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryBestsellingCategoryViewComponent } from './sales-history-bestselling-category-view.component';

describe('SalesHistoryBestsellingCategoryViewComponent', () => {
  let component: SalesHistoryBestsellingCategoryViewComponent;
  let fixture: ComponentFixture<SalesHistoryBestsellingCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesHistoryBestsellingCategoryViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesHistoryBestsellingCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
