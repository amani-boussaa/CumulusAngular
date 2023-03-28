import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;
  institution:any
  description:any
  address:any
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    const newUser = { name: this.name, username: this.username,email:this.email, password: this.password,institution:this.institution,address:this.address,description:this.description };
    this.authenticationService.registerUser(newUser).subscribe(
      (response: any) => {
        console.log('User registered', response);
        this.router.navigate(['auth/login']);
      },
      (error: any) => {
        console.error('Registration failed', error);
      }
    );
  }

  isValid() {
    return this.username && this.password;
  }
}
