import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPilotsComponent } from './add-pilots.component';

describe('AddPilotsComponent', () => {
  let component: AddPilotsComponent;
  let fixture: ComponentFixture<AddPilotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPilotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
