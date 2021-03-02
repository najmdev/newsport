import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../services/resultats.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  constructor(private service:ResultatsService) { }
  public ufixtures=[];
  public ufixture : any = {
    home : "",
    away : "",
    st_name:"",
    date:"",
    lg_name:""
  };
  ngOnInit(): void {
    this.getfixtures();
  }
  getfixtures()
  {
    this.service.getupcomingfix().subscribe(
      (data) => {
        data=data.data;
        for(let i=0;i<data.length;i++)
        {
          /*if(data[i].countryName === 'Spain' || data[i].countryName === 'Italy' || data[i].countryName === 'France')
          {*/
            this.ufixture={
              home:data[i].homeName,
              away:data[i].awayName,
              st_name:data[i].venueName,
              date:data[i].date,
              lg_name:data[i].leagueName
            }
            this.ufixtures.push(this.ufixture);
          //}
        }             //Next callback
     },
     (error) => {                              //Error callback
       console.error('error');
     }
       );
  }
}
