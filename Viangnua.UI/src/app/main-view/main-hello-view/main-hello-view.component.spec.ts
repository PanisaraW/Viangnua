import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHelloViewComponent } from './main-hello-view.component';

describe('MainHelloViewComponent', () => {
  let component: MainHelloViewComponent;
  let fixture: ComponentFixture<MainHelloViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHelloViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainHelloViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
