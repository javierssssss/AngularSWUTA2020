import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainEstudianteComponent } from './cmain-estudiante.component';

describe('CMainEstudianteComponent', () => {
  let component: CMainEstudianteComponent;
  let fixture: ComponentFixture<CMainEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
