import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-pick-create-block',
  templateUrl: './pick-create-block.component.html',
  styleUrls: ['./pick-create-block.component.scss']
})
export class PickCreateBlockComponent implements OnInit {

  @Input() team! : Team
  @Output() playerPicked = new EventEmitter<{player : Player, champion: Picking}>();

  players! : Player[]

  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['team'] && this.team) {
      this.playerService.getPlayersByTeam(this.team).subscribe((players) => {
        this.players = players
      });
    }
  }

  onPlayerPicked(pick : {player : Player, champion: Picking}): void {
    this.playerPicked.emit(pick);
  }

}
