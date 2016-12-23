/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route21Component } from './route2-1.component';

describe('Route21Component', () => {
  let component: Route21Component;
  let fixture: ComponentFixture<Route21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
