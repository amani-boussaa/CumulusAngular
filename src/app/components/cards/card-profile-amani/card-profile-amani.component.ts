import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/amani/user.service';

@Component({
  selector: 'app-card-profile-amani',
  templateUrl: './card-profile-amani.component.html',
  styleUrls: ['./card-profile-amani.component.css']
})
export class CardProfileAmaniComponent implements OnInit {
  @Input("userData") myuserData: any;
  @Input("id") id: any;
  imageData: any
  constructor(private us:UserService) { }

  ngOnInit(): void {
    if (this.id != null) {
      ///get image user blob
      this.us.getImage(this.id).subscribe(
        (data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            console.log("this.imageData",this.imageData)
            this.imageData = reader.result as string;
          };
          reader.readAsDataURL(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
