import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/amani/user.service';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-profileamani',
  templateUrl: './profileamani.component.html',
  styleUrls: ['./profileamani.component.css']
})
export class ProfileamaniComponent implements OnInit {

  id:any
  name:any
  email:any
  role:any
  institution:any
  description:any
  address:any
  imagePath:any
  imageData:any
  constructor(
    private authService:AuthService,
    private us:UserService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.id = this.authService.getLoggedInId()
    if (this.id!=null) {
      this.us.getOneuser(this.id).subscribe(
        (result:any)=>{
          this.name = result.name
          this.email = result.email
          this.role = result.role.replace("ROLE_", "");
          this.institution = result.institution
          this.description = result.description
          this.address = result.address
          // this.imagePath = "http://localhost:8081/CUMULUS/"+result.imagePath

        }
      )
      // this.us.getImageData(this.id);
      //  this.imagePath = this.us.imageData;
      const url = `http://localhost:8081/CUMULUS/api2/v1/users/getblobimage/${this.id}`;
      this.http.get(url, { responseType: 'blob' }).subscribe(
        (data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageData = reader.result;
          };
          reader.readAsDataURL(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  sendEmail() {
    window.open("mailto:"+this.email);
  }

}
