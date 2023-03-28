import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  isLoggedIn = false;
  usernameOrEmail=""

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

    ngOnInit() {
      this.isLoggedIn = this.authenticationService.isUserLoggedIn(this.authenticationService.ROLE_STUDENT);
      this.usernameOrEmail = this.authenticationService.getLoggedInusernameOrEmail();
      console.log('isLoggedIn ->' , this.isLoggedIn);
    }
    handleLogout() {
      this.authenticationService.logout();
    }
    


  navbarOpen = false;



  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
