import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBestsellingCategoryViewComponent } from './reports-bestselling-category-view.component';

describe('ReportsBestsellingCategoryViewComponent', () => {
  let component: ReportsBestsellingCategoryViewComponent;
  let fixture: ComponentFixture<ReportsBestsellingCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsBestsellingCategoryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsBestsellingCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
