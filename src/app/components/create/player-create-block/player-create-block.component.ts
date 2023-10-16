import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideService } from 'src/app/services/side.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { KDA } from 'src/app/shared/interfaces/kDA';
import { Picking } from 'src/app/shared/interfaces/picking';
import { Player } from 'src/app/shared/interfaces/player';

@Component({
  selector: 'app-player-create-block',
  templateUrl: './player-create-block.component.html',
  styleUrls: ['./player-create-block.component.scss']
})
export class PlayerCreateBlockComponent implements OnInit {

  @Input() player! : Player;
  @Input() i! : number;
  @Output() playerPicked = new EventEmitter<{player : Player, champion : Picking}>();
  pentakill : number = 0
  kda : KDA = {id: 0, player: this.player, kills: 0, death: 0, assist: 0}

  constructor(private sideService : SideService) { }

  ngOnInit(): void {
    this.kda.player = this.player
  }

  onChampionPicked(champion: Picking): void {
    this.playerPicked.emit({player : this.player, champion : champion});
  }

  onPentakill() : void {
    this.sideService.pentakill = this.sideService.pentakill.filter(pentakill => pentakill.player.id !== this.player.id);
    for (let i = 0; i < this.pentakill; i++)
      this.sideService.pentakill.push({id : 0, player : this.player})
  }

  onKDAChange() : void {
    const index = this.sideService.kDA.findIndex(kda => kda.player.id === this.kda.player.id);
    if (index !== -1) {
      this.sideService.kDA[index] = this.kda;
    } else {
      this.sideService.kDA.push(this.kda);
    }
  }
}

