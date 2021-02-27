import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  constructor(private http:HttpClient) { }
  public getresults()
  {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '24f44e5e1amsh2c16115e3ddc3e4p1c4ddejsnfb9848493e18'
    });
    return this.http.get<any>('https://elenasport-io1.p.rapidapi.com/v2/inplay',{ headers: headers });
  }
}
