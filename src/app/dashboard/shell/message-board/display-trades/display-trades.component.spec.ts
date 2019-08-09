import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTradesComponent } from './display-trades.component';

describe('DisplayTradesComponent', () => {
  let component: DisplayTradesComponent;
  let fixture: ComponentFixture<DisplayTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
