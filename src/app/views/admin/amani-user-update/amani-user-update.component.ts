import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/amani/user.service';

@Component({
  selector: 'app-amani-user-update',
  templateUrl: './amani-user-update.component.html',
  styleUrls: ['./amani-user-update.component.css']
})
export class AmaniUserUpdateComponent implements OnInit {

  id=''
  dataObject:any
  dataKey:any
  messageErr=''
  constructor(private route:ActivatedRoute,private us:UserService) {
    this.route.params.subscribe(params=>this.id=params.id)

    this.us.getOneuser(this.id).subscribe(
      (response: any)=>{
        const updatedResponse = {
          val1: response.id,
          val2: response.name,
          val3: response.username,
          val4: response.email,
          // Add other properties from the response object if needed
        };
       this.dataObject=updatedResponse
       const keys = Object.keys(response);

      }
      ,(err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }

}
