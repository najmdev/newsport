import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiguesService {

  constructor(private http:HttpClient) { }
  public getresults()
  {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '0357c2473cmshf8a9ff9baad0eaep15e193jsn899b7c46b326'
    });
    return this.http.get<any>('https://elenasport-io1.p.rapidapi.com/v2/leagues',{ headers: headers });
  }
}
