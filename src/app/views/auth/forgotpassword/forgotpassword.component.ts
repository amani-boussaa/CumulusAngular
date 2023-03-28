import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.sendPasswordResetEmail(this.email)
      .subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Password reset email sent',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error,
            confirmButtonText: 'OK'
          });
        }
      );
  }
}
