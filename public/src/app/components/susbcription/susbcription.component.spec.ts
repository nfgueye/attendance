import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbcriptionComponent } from './susbcription.component';

describe('SusbcriptionComponent', () => {
  let component: SusbcriptionComponent;
  let fixture: ComponentFixture<SusbcriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusbcriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusbcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
