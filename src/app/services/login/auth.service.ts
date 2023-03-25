import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: 'http://localhost:8081/CUMULUS/api';
 USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
 ACCESS_TOKEN = 'accessToken';

 public usernameOrEmail: String;
 public password: String;
 public accessToken: String;
 constructor(private http: HttpClient) { }

 authenticationService(usernameOrEmail: String, password: String) {
  //  return this.http.post(`http://localhost:8081/CUMULUS/api/v1/auth/login`,
  //    { headers: { authorization: this.createBasicAuthToken(usernameOrEmail, password) } }).pipe(map((res) => {
  //      this.usernameOrEmail = usernameOrEmail;
  //      this.password = password;
  //      this.registerSuccessfulLogin(usernameOrEmail, password);
  //    }));
  const credentials = { usernameOrEmail: usernameOrEmail, password: password };
    return this.http.post<any>('http://localhost:8081/CUMULUS/api/v1/auth/login', credentials).pipe(map((res) => {
           this.usernameOrEmail = usernameOrEmail;
           this.password = password;
           this.registerSuccessfulLogin(usernameOrEmail, password,res.accessToken);
         }));
     
 }
 registerUser(user: any) {
  return this.http.post('http://localhost:8081/CUMULUS/api/v1/auth/register', user);
}

 createBasicAuthToken(usernameOrEmail: String, password: String) {
   return 'Basic ' + window.btoa(usernameOrEmail + ":" + password)
 }

 registerSuccessfulLogin(usernameOrEmail, password,accessToken) {
   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, usernameOrEmail)
   sessionStorage.setItem(this.ACCESS_TOKEN, accessToken)
 }

 logout() {
   sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
   sessionStorage.removeItem(this.ACCESS_TOKEN);
   this.usernameOrEmail = null;
   this.password = null;
 }

 isUserLoggedIn() {
   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
   if (user === null) return false
   return true
 }

 getLoggedInusernameOrEmail() {
   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
   if (user === null) return ''
   return user
 }
}
