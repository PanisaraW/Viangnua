import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReminderViewComponent } from './main-reminder-view.component';

describe('MainReminderViewComponent', () => {
  let component: MainReminderViewComponent;
  let fixture: ComponentFixture<MainReminderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainReminderViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReminderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
