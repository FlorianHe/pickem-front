import { Component, Input, OnInit } from '@angular/core';
import { SideService } from 'src/app/services/side.service';
import { Drake } from 'src/app/shared/interfaces/drake';
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

  @Input() sideColor! : string;

  side! : Side;
  team! : Team;
  isDurationValid : boolean = false

  constructor(private sideService : SideService) { }

  ngOnInit(): void {
    this.side = this.sideColor === "red" ? this.sideService.redSide : this.sideService.blueSide;
  }

  onTeamPicked(team : Team): void {
    this.side.team = team
    this.team = team
  }

  onBanChampionPicked(champion : Picking): void {
    const index = this.side.ban.findIndex(ban => ban.champion.id === champion?.unpick?.id as number);
    if (index !== -1) {
      this.side.ban[index] = {id : 0, team : this.side.team, champion : champion.pick};
    } else {
      this.side.ban.push({id : 0, team : this.side.team, champion : champion.pick});
    }
  }

  onDrakePicked(drake : Drake): void {
    this.side.drakeKilled.push({id : 0, team : this.side.team, drake : drake})
  }

  OnPlayerPicked(pick : {player : Player, champion: Picking}) {
    if (this.side.pick.some(item => item.player.id === pick.player.id)) {
      this.side.pick = this.side.pick.filter(item => item.player.id !== pick.player.id);
    }
    this.side.pick.push({id: 0, player : pick.player, champion : pick.champion.pick, team : this.side.team,})
  }
}
