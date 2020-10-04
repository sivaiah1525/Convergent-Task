import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsLayoutComponent } from './flights-layout.component';

describe('FlightsLayoutComponent', () => {
  let component: FlightsLayoutComponent;
  let fixture: ComponentFixture<FlightsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
