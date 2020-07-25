import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAutenticacionComponent } from './cautenticacion.component';

describe('CAutenticacionComponent', () => {
  let component: CAutenticacionComponent;
  let fixture: ComponentFixture<CAutenticacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAutenticacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
