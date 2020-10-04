import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceselectComponent } from './placeselect.component';

describe('PlaceselectComponent', () => {
  let component: PlaceselectComponent;
  let fixture: ComponentFixture<PlaceselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
