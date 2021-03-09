import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiplaneComponent } from './aiplane.component';

describe('AiplaneComponent', () => {
  let component: AiplaneComponent;
  let fixture: ComponentFixture<AiplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
