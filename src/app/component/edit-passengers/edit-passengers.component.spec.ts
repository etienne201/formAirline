import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassengersComponent } from './edit-passengers.component';

describe('EditPassengersComponent', () => {
  let component: EditPassengersComponent;
  let fixture: ComponentFixture<EditPassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
