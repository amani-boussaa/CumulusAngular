import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  imageData:any
  token: any = localStorage.getItem('accessToken')
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };



  constructor(private http: HttpClient) { }



  getAllusers() {
    // return this.http.get(`${environment.urlBackend}`+'api2/v1/users/',{headers:this.headerall,params:this.params})
    return this.http.get(`${environment.urlBackend}` + 'api2/v1/users', this.httpOptions)
  }

  // adduser(profile:any){

  //   return this.http.post(environment.urlBackend+'adduser/',profile,{headers:this.headerAdmin,params:this.params})

  // }

  deleteuser(id: any) {
    return this.http.delete(environment.urlBackend + 'api2/v1/users/removeUser/' + id, this.httpOptions)

  }


  updateuser(id: string, newprofile: any) {
    return this.http.put(environment.urlBackend + 'api2/v1/users/updateUser/' + id, newprofile, this.httpOptions)

  }


  getOneuser(id: any) {

    return this.http.get(environment.urlBackend + 'api2/v1/users/retrieveUser/' + id, this.httpOptions)
  }

  uploadImage(id: number, file: File) {
    const url = `${environment.urlBackend}api2/v1/users/${id}/image`;

    const formData = new FormData();
    formData.append('file', file);    

    return this.http.post(url, formData, this.httpOptions);
  }

  // getImageData(id: number) {
  //   const url = `${environment.urlBackend}api2/v1/users/getblobimage/${id}`;
  //   this.http.get(url, { responseType: 'blob' }).subscribe(
  //     (data: Blob) => {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         this.imageData = reader.result;
  //       };
  //       reader.readAsDataURL(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
