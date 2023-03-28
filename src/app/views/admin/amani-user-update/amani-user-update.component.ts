import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/amani/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amani-user-update',
  templateUrl: './amani-user-update.component.html',
  styleUrls: ['./amani-user-update.component.css']
})
export class AmaniUserUpdateComponent implements OnInit {
  selectedFile: File = null;

  @ViewChild('fileInput') fileInput: ElementRef;

  entity: any
  id: any
  userData = {
    name: "",
    username: "",
    email: "",
    institution:"",
    address:"",
    description:""
  };
  attributes = [
    { name: 'name', label: 'Name', required: true },
    { name: 'username', label: 'Username', required: false },
    { name: 'email', label: 'Email', required: false },
    { name: 'institution', label: 'Institution', required: false },
    { name: 'description', label: 'Description', required: false },
    { name: 'address', label: 'Address', required: false },
  ];
  onUpdateEntity(updatedEntity) {
    const id = this.id;
    const newprofile = {
      name: updatedEntity.name,
      username: updatedEntity.username,
      email: updatedEntity.email,
      institution: updatedEntity.institution,
      description: updatedEntity.description,
      address: updatedEntity.address,
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

  constructor(private route: ActivatedRoute, private us: UserService,private http: HttpClient) {
    this.route.params.subscribe(params => this.id = params.id)
    this.us.getOneuser(this.id).subscribe(
      (response: any) => {
        this.userData.name = response.name
        this.userData.username = response.username
        this.userData.email = response.email
        this.userData.institution = response.institution
        this.userData.description = response.description
        this.userData.address = response.address
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


  onSubmit2() {
    this.us.uploadImage(this.id, this.selectedFile).subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'File uploaded successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        const imageUrl = URL.createObjectURL(this.selectedFile);
        Swal.fire({
          imageUrl: imageUrl,
          imageAlt: 'Uploaded Image'
        });
      },
      err => {
        Swal.fire({
          title: 'Error',
          text: 'File upload failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }


 
}
