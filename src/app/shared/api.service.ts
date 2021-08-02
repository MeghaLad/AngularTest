import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient){}
 
  public getList(){
    // retunt data from server.
    return this.http.get("assets/response.json");
  }
}

