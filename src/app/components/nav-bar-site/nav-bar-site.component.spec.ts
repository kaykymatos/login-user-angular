import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSiteComponent } from './nav-bar-site.component';

describe('NavBarSiteComponent', () => {
  let component: NavBarSiteComponent;
  let fixture: ComponentFixture<NavBarSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
