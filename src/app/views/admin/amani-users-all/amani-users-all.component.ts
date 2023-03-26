import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/amani/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-amani-users-all',
  templateUrl: './amani-users-all.component.html',
  styleUrls: ['./amani-users-all.component.css']
})
export class AmaniUsersAllComponent implements OnInit {
  dataArray:any=[]

  // dataStudent={
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   age:0,
  //   phone:0,
  //   id:'',
  // }

  messageSuccess=''

  title = "Users"
  colnames=["id","name","username","email","role"]
  
  constructor(private us:UserService,private route:Router) {
   
    this.us.getAllusers().subscribe(data=>{
      console.log(data)
      if (Array.isArray(data)) {
      this.dataArray = data.map(user => ({
        val1: user.id,
        val2: user.name,
        val3: user.username,
        val4: user.email,
        val5: user.role.replace('ROLE_', ''),
      }));
      }else {
        console.error('Data is not an array:', data);
      }
    })
    
   }
  ngOnInit(): void {
  }
  delete(eventData: {id: number, index: number}){

    this.us.deleteuser(eventData.id).subscribe(response=>{
      console.log(response)
       this.dataArray.splice(eventData.index,1)

    })

  }
  update(id:any){
    this.route.navigate(['admin/userupdate/'+id.id])
  }
  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }
}
