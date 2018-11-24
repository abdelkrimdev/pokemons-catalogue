import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
  });

  it('should create the navigation bar component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a link to the home page', () => {
    const routerLinks = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(routerLinks.findIndex(de => de.attributes['routerLink'] === 'home')).toBeGreaterThanOrEqual(0);
  });
});
