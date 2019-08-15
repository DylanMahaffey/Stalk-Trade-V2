import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsFeedComponent } from './crops-feed.component';

describe('CropsFeedComponent', () => {
  let component: CropsFeedComponent;
  let fixture: ComponentFixture<CropsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
