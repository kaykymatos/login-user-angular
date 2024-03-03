import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterSiteComponent } from "./components/footer-site/footer-site.component";
import { NavBarSiteComponent } from "./components/nav-bar-site/nav-bar-site.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-nav-bar-site/>
  <router-outlet/>
  <app-footer-site/>
  `,
  imports: [CommonModule, RouterOutlet, FooterSiteComponent, NavBarSiteComponent,HttpClientModule]
})
export class AppComponent {
  title = 'Home';
}
