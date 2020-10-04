import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnddateComponent } from './enddate.component';

describe('EnddateComponent', () => {
  let component: EnddateComponent;
  let fixture: ComponentFixture<EnddateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnddateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
