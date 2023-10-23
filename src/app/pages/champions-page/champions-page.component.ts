import { Component, OnInit } from '@angular/core';
import { BanService } from 'src/app/services/ban.service';
import { PickService } from 'src/app/services/pick.service';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';
import { Winrate } from 'src/app/shared/interfaces/winrate';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.scss']
})
export class ChampionsPageComponent implements OnInit {

  picks! : ChampionAmount[];
  bans! : ChampionAmount[];
  deaths! : ChampionAmount[];
  roles! : ChampionAmount[];
  winrates! : Winrate[];

  constructor(private pickService : PickService, private banService : BanService) { }

  ngOnInit(): void {
    this.pickService.getPickAmount().subscribe((picks) => {
      this.picks = picks
    })
    this.banService.getBanAmount().subscribe((bans) => {
      this.bans = bans
    })
    this.pickService.getDeathAmount().subscribe((deaths) => {
      this.deaths = deaths
    })
    this.pickService.getMultiRoles().subscribe((roles) => {
      this.roles = roles;
    })
    this.pickService.getWinrateByChampion().subscribe((winrates) => {
      this.winrates = winrates;
    })
  }

}
