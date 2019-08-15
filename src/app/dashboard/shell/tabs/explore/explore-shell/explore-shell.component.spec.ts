import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreShellComponent } from './explore-shell.component';

describe('ExploreShellComponent', () => {
  let component: ExploreShellComponent;
  let fixture: ComponentFixture<ExploreShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
