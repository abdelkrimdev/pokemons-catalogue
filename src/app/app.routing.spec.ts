import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { routes } from './app.routing';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
        HomeComponent,
        NavBarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it(`should redirects you to '/home' when navigate to ''`, async(
    inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/home');
      });
    })
  ));

  it(`should takes you to '/home' when navigate to 'home'`, async(
    inject([Router, Location], (router: Router, location: Location) => {
      router.navigate(['home']).then(() => {
        expect(location.path()).toBe('/home');
      });
    })
  ));
});
