import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmessagePage } from './newmessage.page';

describe('NewmessagePage', () => {
  let component: NewmessagePage;
  let fixture: ComponentFixture<NewmessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
