import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/amani/user.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amani-users-all',
  templateUrl: './amani-users-all.component.html',
  styleUrls: ['./amani-users-all.component.css']
})
export class AmaniUsersAllComponent implements OnInit {
  dataArray:any=[]

  messageSuccess=''

  title = "Users"
  colnames=["id","name","username","email","role","verified"]
  
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
        val6: user.verified
      }));
      }else {
        console.error('Data is not an array:', data);
      }
    })
    
   }
  ngOnInit(): void {
  }
  // delete(eventData: {id: number, index: number}){

  //   this.us.deleteuser(eventData.id).subscribe(response=>{
  //     console.log(response)
  //      this.dataArray.splice(eventData.index,1)

  //   })

  // }
  delete(eventData: {id: number, index: number}) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.us.deleteuser(eventData.id).subscribe(response => {
          this.dataArray.splice(eventData.index, 1);
          Swal.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'User deletion has been cancelled :)',
          'error'
        );
      }
    });
  }
  update(id:any){
    this.route.navigate(['admin/userupdate/'+id.id])
  }
  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }
}
