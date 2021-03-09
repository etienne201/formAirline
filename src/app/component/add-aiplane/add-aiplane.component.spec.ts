import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAiplaneComponent } from './add-aiplane.component';

describe('AddAiplaneComponent', () => {
  let component: AddAiplaneComponent;
  let fixture: ComponentFixture<AddAiplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAiplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAiplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
