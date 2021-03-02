import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiguesService } from '../services/ligues.service';

@Component({
  selector: 'app-ligues',
  templateUrl: './ligues.component.html',
  styleUrls: ['./ligues.component.css']
})
export class LiguesComponent implements OnInit {

  constructor(private leagueService:LiguesService,private route:ActivatedRoute) {}
  id: number;
  public leagues=[];
  public league : any = {
    id :0,
    idCountry :0,
    countryName:"",
    name:"",
    nationalLeague:true,
    clubsLeague:true
  };


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.leagueService.getresults().subscribe(
      (data) => {
        data=data.data;
        for(let i=0;i<data.length;i++)
        {

            this.league={
              id:data[i].id,
              idCountry:data[i].idCountry,
              countryName:data[i].countryName,
              name:data[i].name,
              nationalLeague:data[i].nationalLeague,
              clubsLeague:data[i].clubsLeague
            }
            this.leagues.push(this.league);

        }
     },
    )
  }

}
