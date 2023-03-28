import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  token: string
  newPassword: string
  constructor(private authService: AuthService,private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.token = params.token)
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.resetPassword(this.token,this.newPassword)
      .subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Password has been successfully reset.',
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
