import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TestamaniService {
  private baseUrl = 'http://localhost:8081/CUMULUS/api/';  

  constructor(private http:HttpClient) { }  

  getTest(): Observable<any> {  
    return this.http.get<{message: string}>(`${this.baseUrl}`+'home');  
  }  
}
