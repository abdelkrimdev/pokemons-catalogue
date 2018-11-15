import { NgZone } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { routes } from './app.routing';

import { MaterialModule } from './material/material.module';

import { HomeComponent } from './home/home.component';

describe('Application Routing', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  it(`should redirects you to '/home' when navigate to ''`, async(
    inject([NgZone, Router, Location], (ngZone: NgZone, router: Router, location: Location) => {
      ngZone.run(() =>
        router.navigate(['']).then(() => {
          expect(location.path()).toBe('/home');
        })
      );
    })
  ));

  it(`should takes you to '/home' when navigate to 'home'`, async(
    inject([NgZone, Router, Location], (ngZone: NgZone, router: Router, location: Location) => {
      ngZone.run(() =>
        router.navigate(['home']).then(() => {
          expect(location.path()).toBe('/home');
        })
      );
    })
  ));
});
