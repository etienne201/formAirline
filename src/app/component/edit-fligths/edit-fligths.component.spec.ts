import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFligthsComponent } from './edit-fligths.component';

describe('EditFligthsComponent', () => {
  let component: EditFligthsComponent;
  let fixture: ComponentFixture<EditFligthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFligthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFligthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
