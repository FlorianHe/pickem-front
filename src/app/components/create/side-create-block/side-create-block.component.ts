import { Component, OnInit } from '@angular/core';
import { Ban } from 'src/app/shared/interfaces/ban';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';
import { Player } from 'src/app/shared/interfaces/player';
import { Side } from 'src/app/shared/interfaces/side';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-side-create-block',
  templateUrl: './side-create-block.component.html',
  styleUrls: ['./side-create-block.component.scss']
})
export class SideCreateBlockComponent implements OnInit {

  side : Side = {
    id: 0, 
    bO: {id : 0},
    team: {id : 0, name : ""},
    ban: [],
    pick: [],
    drake: [],
    pentakill: [],
    baronSteal: 0,
    duration: ''
  };

  team! : Team;
  isDurationValid : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onTeamPicked(team : Team): void {
      this.side.team = team
      this.team = team
      console.log(this.side)
  }

  onBanChampionPicked(champion : Picking): void {
    if (champion.unpick != null) {
      this.side.ban = this.side.ban.filter(item => item.champion.id !== champion?.unpick?.id as number);
    }
      this.side.ban.push({id : 0, team : this.side.team, champion : champion.pick})
      console.log(this.side)
  }

  onDrakePicked(drake : string): void {
    this.side.drake.push({id : 0, team : this.side.team, type : drake})
    console.log(this.side)
  }

  OnPlayerPicked(pick : {player : Player, champion: Picking}) {
    if (this.side.pick.some(item => item.player.id === pick.player.id)) {
      this.side.pick = this.side.pick.filter(item => item.player.id !== pick.player.id);
    }
    this.side.pick.push({id: 0, player : pick.player, champion : pick.champion.pick})
      console.log(this.side)
  }

  onInputChange(): void {
    const regex = /^\d+:\d+$/;
    this.isDurationValid = regex.test(this.side.duration);
  }
}
