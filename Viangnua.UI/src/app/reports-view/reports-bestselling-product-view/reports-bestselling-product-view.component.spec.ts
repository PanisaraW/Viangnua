import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBestsellingProductViewComponent } from './reports-bestselling-product-view.component';

describe('ReportsBestsellingProductViewComponent', () => {
  let component: ReportsBestsellingProductViewComponent;
  let fixture: ComponentFixture<ReportsBestsellingProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsBestsellingProductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsBestsellingProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
