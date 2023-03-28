import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent  {
  usernameOrEmail: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  role: string
  url:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private arouter:ActivatedRoute
  ) {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || 'admin/dashboard'

  }

  ngOnInit(): void {}

  onSubmit() {
    this.authenticationService.authenticationService(this.usernameOrEmail, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      if (this.authenticationService.isUserLoggedIn(this.authenticationService.ROLE_STUDENT)) {
        this.url=this.arouter.snapshot.queryParams['returnUrl'] || 'profileamani'
      }
      this.router.navigate([this.url]);
    }, (error: any) => {
      console.error('Login failed', error);
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
