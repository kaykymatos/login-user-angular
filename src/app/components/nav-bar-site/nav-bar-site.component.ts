import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar-site',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar-site.component.html',
  styleUrl: './nav-bar-site.component.scss'
})
export class NavBarSiteComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  isAuth() {
    return this.authService.isAuthenticated()
  }
  isActive(link: string): boolean {
    return this.router.url === link;
  }
}
