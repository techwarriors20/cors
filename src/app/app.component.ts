import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = 'demoapp';
 //private url: string = 'https://reflectapi.azurewebsites.net/api/v1/attempt/GetAllAttempt';
 private url: string = 'https://localhost:5001/api/v1/attempt/GetAllAttempt';
  public attempts: any[];
  constructor(private http: HttpClient) { 

    this.getAllAttempt().subscribe(res => {
      this.attempts = res;
      console.log('Result :'+ res);       
      });
    
  } 

  getAllAttempt() : Observable<any[]>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNTkxODcxMzY3LCJleHAiOjE1OTI0NzYxNjcsImlhdCI6MTU5MTg3MTM2N30.D-SJfHmhqqBgOXroWL1VFREj0y6nREHxa_6Of-S5Elk';//sessionStorage.getItem('token');       
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = { 'headers': headers_object};
  
    var response = this.http.get<any[]>(this.url , httpOptions);
    console.log('method :'+ response);  
    return response;
      
  }
  
 
}
 


