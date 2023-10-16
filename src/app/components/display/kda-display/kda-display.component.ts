import { Component, Input, OnInit } from '@angular/core';
import { KDAService } from 'src/app/services/k-da.service';
import { Game } from 'src/app/shared/interfaces/game';
import { KDA } from 'src/app/shared/interfaces/kDA';
import { Pick } from 'src/app/shared/interfaces/pick';

@Component({
  selector: 'app-kda-display',
  templateUrl: './kda-display.component.html',
  styleUrls: ['./kda-display.component.scss']
})
export class KdaDisplayComponent implements OnInit {

  @Input() pick! : Pick;
  kda! : KDA;

  constructor(private kdaService : KDAService) { }

  ngOnInit(): void {
    this.kdaService.getKDAByGameAndPlayer(this.pick.game as Game, this.pick.player).subscribe((kda) => {
      this.kda = kda
    });

  }

}
