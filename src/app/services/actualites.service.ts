import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualitesService {

  url = "http://newsapi.org/v2/top-headlines?country=ma&category=sports&apiKey=b2bb47d96084485fa799dbafe50cd724";

  constructor(private http: HttpClient) { }

  getNews(countryCode: string) {
    return this.http.get("http://newsapi.org/v2/top-headlines?country=" + countryCode + "&category=sports&apiKey=b2bb47d96084485fa799dbafe50cd724");
  }

}
