import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPurchaseViewComponent } from './main-purchase-view.component';

describe('MainPurchaseViewComponent', () => {
  let component: MainPurchaseViewComponent;
  let fixture: ComponentFixture<MainPurchaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPurchaseViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPurchaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
