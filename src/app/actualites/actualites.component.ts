import { Component, OnInit } from '@angular/core';
import { ActualitesService } from '../services/actualites.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  articles: [];

  constructor(private actualiteService : ActualitesService) { }

  ngOnInit(): void {
    this.currentNews();
  }

  currentNews(code="ma") {
    this.actualiteService.getNews(code)
      .subscribe(
        data => {
          this.articles = data['articles'];
          this.readMore()
        },
        error => {
          console.log('an error occured');
        }
      );
  }

  readMore() {
    this.articles.forEach((article:any) => {
      if(article != null) {
        article['showContent'] = false;
        console.log(article['showContent'])
      }
    })
  }
}
