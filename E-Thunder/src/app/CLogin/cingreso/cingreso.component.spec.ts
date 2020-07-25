import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CIngresoComponent } from './cingreso.component';

describe('CIngresoComponent', () => {
  let component: CIngresoComponent;
  let fixture: ComponentFixture<CIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
