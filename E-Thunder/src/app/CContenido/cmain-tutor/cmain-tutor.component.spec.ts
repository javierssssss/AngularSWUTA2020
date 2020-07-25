import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainTutorComponent } from './cmain-tutor.component';

describe('CMainTutorComponent', () => {
  let component: CMainTutorComponent;
  let fixture: ComponentFixture<CMainTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
