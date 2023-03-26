import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any=localStorage.getItem('accessToken')
   httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };


  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) { }



  getAllusers(){
    console.log("oo")
    // return this.http.get(`${environment.urlBackend}`+'api2/v1/users/',{headers:this.headerall,params:this.params})
    return this.http.get(`${environment.urlBackend}`+'api2/v1/users',this.httpOptions)
  }

  // adduser(profile:any){

  //   return this.http.post(environment.urlBackend+'adduser/',profile,{headers:this.headerAdmin,params:this.params})

  // }

  deleteuser(id:any){
    return this.http.delete(environment.urlBackend+'api2/v1/users/removeUser/'+id,this.httpOptions)

  }


  updateuser(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'api2/v1/users/updateUser/'+id,newprofile,this.httpOptions)

  }


  getOneuser(id:any){
    
    return this.http.get(environment.urlBackend+'api2/v1/users/retrieveUser/'+id,this.httpOptions)
  }
}
