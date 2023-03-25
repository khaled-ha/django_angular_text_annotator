import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataToPush } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://0.0.0.0:8000/api/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    console.log(this.http.get(this.API_URL));
    return this.http.get(this.API_URL);
  }

  public postData(new_data: any){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(new_data);
    console.log('Bodyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    console.log(body)
    return this.http.post(this.API_URL,body, {'headers': headers});
  }
}
