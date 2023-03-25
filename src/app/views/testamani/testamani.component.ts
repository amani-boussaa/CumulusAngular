import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestamaniService } from 'src/app/services/testamani.service';

@Component({
  selector: 'app-testamani',
  templateUrl: './testamani.component.html',
  styleUrls: ['./testamani.component.css']
})
export class TestamaniComponent implements OnInit {

  constructor(private TestamaniService:TestamaniService,private http: HttpClient) { }
 message:any
  // ngOnInit(): void {
  //   this.TestamaniService.getTest().subscribe(data =>{  
  //     this.message =data;  
  //     })  
  // }
  ngOnInit(): void {
    this.http.get<{message: string}>('http://localhost:8081/CUMULUS/api/home/')
      .subscribe(data => {
        this.message = data.message;
      });
  }
}
