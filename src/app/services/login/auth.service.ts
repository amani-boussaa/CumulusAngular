import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  ACCESS_TOKEN = 'accessToken';

  helper = new JwtHelperService()
  role = ''
  ROLE_ADMIN = "ROLE_ADMIN"
  ROLE_TEACHER = "ROLE_TEACHER"
  ROLE_STUDENT = "ROLE_STUDENT"

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
      //new ads
      //  this.Profil.role
      this.registerSuccessfulLogin(usernameOrEmail, password, res.accessToken);
    }));

  }
  registerUser(user: any) {
    return this.http.post('http://localhost:8081/CUMULUS/api/v1/auth/register', user);
  }

  createBasicAuthToken(usernameOrEmail: String, password: String) {
    return 'Basic ' + window.btoa(usernameOrEmail + ":" + password)
  }

  registerSuccessfulLogin(usernameOrEmail, password, accessToken) {
    //  localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, usernameOrEmail)
    localStorage.setItem(this.ACCESS_TOKEN, accessToken)
  }

  logout() {
    //  localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    localStorage.removeItem(this.ACCESS_TOKEN);
    this.usernameOrEmail = null;
    this.password = null;
  }

  isUserLoggedIn(role_login = "") {
    //  let user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    //  if (user === null) return false
    //  return true
    let token: any = localStorage.getItem(this.ACCESS_TOKEN)
    if (!token) {
      return false
    }
    let decodeToken = this.helper.decodeToken(token)


    // if(decodeToken.role!==this.ROLE_ADMIN){
    if (decodeToken.role !== role_login) {
      return false
    }

    if (this.helper.isTokenExpired(token)) {
      return false
    }

    return true

  }

  getLoggedInusernameOrEmail() {
    let token = localStorage.getItem(this.ACCESS_TOKEN)
    let decodeToken = this.helper.decodeToken(token)
    if (token === null) return ''
    return decodeToken.name
  }

  sendPasswordResetEmail(email: string) {
    return this.http.post('http://localhost:8081/CUMULUS/api/auth/forgot-password', { email });
  }

  resetPassword(token:string,newPassword:string) {
    return this.http.post('http://localhost:8081/CUMULUS/api/auth/reset-password', {token,newPassword});
  }
}
