/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route12Component } from './route1-2.component';

describe('Route12Component', () => {
  let component: Route12Component;
  let fixture: ComponentFixture<Route12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
