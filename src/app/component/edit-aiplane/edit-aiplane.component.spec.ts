import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAiplaneComponent } from './edit-aiplane.component';

describe('EditAiplaneComponent', () => {
  let component: EditAiplaneComponent;
  let fixture: ComponentFixture<EditAiplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAiplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAiplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
