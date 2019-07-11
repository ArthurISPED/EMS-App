import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiondetailsPage } from './missiondetails.page';

describe('MissiondetailsPage', () => {
  let component: MissiondetailsPage;
  let fixture: ComponentFixture<MissiondetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissiondetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissiondetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
