import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformPage } from './newform.page';

describe('NewformPage', () => {
  let component: NewformPage;
  let fixture: ComponentFixture<NewformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
