import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSalesViewComponent } from './main-sales-view.component';

describe('MainSalesViewComponent', () => {
  let component: MainSalesViewComponent;
  let fixture: ComponentFixture<MainSalesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSalesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSalesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
