import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFligthsComponent } from './add-fligths.component';

describe('AddFligthsComponent', () => {
  let component: AddFligthsComponent;
  let fixture: ComponentFixture<AddFligthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFligthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFligthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
