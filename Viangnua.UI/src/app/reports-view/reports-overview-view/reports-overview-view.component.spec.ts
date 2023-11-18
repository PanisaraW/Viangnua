import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOverviewViewComponent } from './reports-overview-view.component';

describe('ReportsOverviewViewComponent', () => {
  let component: ReportsOverviewViewComponent;
  let fixture: ComponentFixture<ReportsOverviewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsOverviewViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsOverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
