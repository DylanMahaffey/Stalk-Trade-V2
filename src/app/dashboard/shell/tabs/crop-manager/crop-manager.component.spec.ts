import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropManagerComponent } from './crop-manager.component';

describe('CropManagerComponent', () => {
  let component: CropManagerComponent;
  let fixture: ComponentFixture<CropManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
