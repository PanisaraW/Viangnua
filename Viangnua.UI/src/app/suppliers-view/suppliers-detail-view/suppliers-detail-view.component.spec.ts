import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDetailViewComponent } from './suppliers-detail-view.component';

describe('SuppliersDetailViewComponent', () => {
  let component: SuppliersDetailViewComponent;
  let fixture: ComponentFixture<SuppliersDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppliersDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
