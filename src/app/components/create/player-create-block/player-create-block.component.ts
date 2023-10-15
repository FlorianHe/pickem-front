import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';
import { Player } from 'src/app/shared/interfaces/player';

@Component({
  selector: 'app-player-create-block',
  templateUrl: './player-create-block.component.html',
  styleUrls: ['./player-create-block.component.scss']
})
export class PlayerCreateBlockComponent implements OnInit {

  @Input() player! : Player;
  @Output() playerPicked = new EventEmitter<{player : Player, champion : Picking}>();
  pentakill! : number

  constructor() { }

  ngOnInit(): void {
  }

  onChampionPicked(champion: Picking): void {
    this.playerPicked.emit({player : this.player, champion : champion});
  }
}

