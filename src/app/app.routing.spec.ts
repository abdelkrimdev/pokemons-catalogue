import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { routes } from './app.routing';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

describe('Application Routing', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        NavBarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it(`should redirects you to '/dashboard' when navigate to ''`, async(
    inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/dashboard');
      });
    })
  ));

  it(`should takes you to '/dashboard' when navigate to 'dashboard'`, async(
    inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['dashboard']).then(() => {
        expect(location.path()).toBe('/dashboard');
      });
    })
  ));
});
