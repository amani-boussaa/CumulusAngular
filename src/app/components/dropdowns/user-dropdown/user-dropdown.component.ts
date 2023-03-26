import { Component, AfterViewInit, ViewChild, ElementRef,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit,OnInit {
  isLoggedIn = false;
  usernameOrEmail=""

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

    ngOnInit() {
      this.isLoggedIn = this.authenticationService.isUserLoggedIn(this.authenticationService.ROLE_ADMIN);
      this.usernameOrEmail = this.authenticationService.getLoggedInusernameOrEmail();
      console.log('isLoggedIn ->' , this.isLoggedIn);
    }
    handleLogout() {
      this.authenticationService.logout();
    }
    
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
