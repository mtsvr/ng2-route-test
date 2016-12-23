/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Route22Component } from './route2-2.component';

describe('Route22Component', () => {
  let component: Route22Component;
  let fixture: ComponentFixture<Route22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
