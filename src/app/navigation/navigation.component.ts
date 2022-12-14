import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginControllerService } from '../controllers/login-controller.service';
import { NAV_LINKS, PROFILE_LINKS, Link } from '../links';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    class: 'navbar navbar-expand-sm navbar-dark bg-primary sticky-top'
  }
})
export class NavigationComponent implements OnInit {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;
  public faSignInAlt = faSignInAlt;

  public isLoggedIn: boolean = false;
  public navLinks: Link[] = NAV_LINKS;
  public profileLinks: Link[] = PROFILE_LINKS;
  public isMenuCollapsed: boolean;

  constructor(public route: ActivatedRoute, public auth: LoginControllerService, private router: Router) {
    this.isMenuCollapsed = true;
    auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
      this.navLinks = auth.routes;
    });
    
  }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    try {
      await this.auth.logout();
      this.isLoggedIn = false;
    }
    catch (err) {
      console.error(err);
    }
      this.router.navigate(['/login']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  public changePassword(): void {
    //this.router.navigate(['/change-password']);
  }
}
