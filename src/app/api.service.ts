import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  websiteConfigID = '26432'

  constructor(private httpClient: HttpClient) { }


  public getCategory(){

    return this.httpClient.get("http://ticketgrace.fftbzzpzy3.us-east-2.elasticbeanstalk.com/api/category");
    
  }

  
}
