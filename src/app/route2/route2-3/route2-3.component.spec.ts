/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route23Component } from './route2-3.component';

describe('Route23Component', () => {
  let component: Route23Component;
  let fixture: ComponentFixture<Route23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
