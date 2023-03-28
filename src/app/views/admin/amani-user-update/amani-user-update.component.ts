import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/amani/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amani-user-update',
  templateUrl: './amani-user-update.component.html',
  styleUrls: ['./amani-user-update.component.css']
})
export class AmaniUserUpdateComponent implements OnInit {
  entity: any
  id: any
  userData = {
    name: "",
    username: "",
    email: "",
  };
  attributes = [
    { name: 'name', label: 'Name', required: true },
    { name: 'username', label: 'Username', required: false },
    { name: 'email', label: 'Email', required: false },
  ];
  onUpdateEntity(updatedEntity) {
    const id = this.id;
    const newprofile = {
      name: updatedEntity.name,
      username: updatedEntity.username,
      email: updatedEntity.email,
    };
    this.us.updateuser(id, newprofile).subscribe(
      data => {
        this.entity = data;
        Swal.fire({
          icon: 'success',
          title: 'User updated successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User update failed!',
          footer: error.message
        });
      }

    );
  }

  constructor(private route: ActivatedRoute, private us: UserService) {
    this.route.params.subscribe(params => this.id = params.id)
    this.us.getOneuser(this.id).subscribe(
      (response: any) => {
        this.userData.name = response.name
        this.userData.username = response.username
        this.userData.email = response.email
        this.entity = this.userData
      }
      , (err: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "We dont't found this user in our database!",
          footer: err.message
        });
      })
  }
  ngOnInit(): void {}

}
