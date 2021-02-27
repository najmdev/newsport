import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../services/resultats.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  constructor(private service:ResultatsService) { }
  public fixtures=[];
  public fixture : any = {
    home : "",
    away : "",
    home_g:0,
    away_g:0,
    st_name:"",
    date:"",
    elapsed:0
  };
  ngOnInit(): void {
    this.service.getresults().subscribe(
      (data) => {
        data=data.data;
        for(let i=0;i<data.length;i++)
        {
          /*if(data[i].countryName === 'Spain' || data[i].countryName === 'Italy' || data[i].countryName === 'France')
          {*/
            this.fixture={
              home:data[i].homeName,
              away:data[i].awayName,
              home_g:data[i].team_home_90min_goals,
              away_g:data[i].team_away_90min_goals,
              st_name:data[i].venueName,
              date:data[i].date,
              elapsed:data[i].elapsed
            }
            this.fixtures.push(this.fixture);
          //}
        }             //Next callback
     },
     (error) => {                              //Error callback
       console.error('error');
     }
       );
  }

}
