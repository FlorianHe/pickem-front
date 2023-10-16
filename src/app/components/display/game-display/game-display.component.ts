import { Component, Input, OnInit } from '@angular/core';
import { BanService } from 'src/app/services/ban.service';
import { DrakeKilledService } from 'src/app/services/drake-killed.service';
import { PickService } from 'src/app/services/pick.service';
import { Game } from 'src/app/shared/interfaces/game';
import { Side } from 'src/app/shared/interfaces/side';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  @Input() game! : Game;
  blueSide! : Side;
  redSide! : Side;
  

  constructor(private pickService : PickService, private banService : BanService, private drakeKilledService : DrakeKilledService) { }

  ngOnInit(): void {
    this.blueSide = new Side(this.game.teamBlue, [], [], []);
    this.redSide = new Side(this.game.teamRed, [], [], []);
    this.pickService.getPicksByGameAndTeam(this.game, this.game.teamBlue).subscribe((bluePick) => 
    {
      this.blueSide.pick = bluePick;
    });
    this.pickService.getPicksByGameAndTeam(this.game, this.game.teamRed).subscribe((redPick) => 
    {
      this.redSide.pick = redPick;
    });
    this.banService.getBansByGameAndTeam(this.game, this.game.teamBlue).subscribe((blueBan) => 
    {
      this.blueSide.ban = blueBan;
    });
    this.banService.getBansByGameAndTeam(this.game, this.game.teamRed).subscribe((redBan) => 
    {
      this.redSide.ban = redBan;
    });
    this.drakeKilledService.getDrakesByGameAndTeam(this.game, this.game.teamBlue).subscribe((blueDrakes) => 
    {
      this.blueSide.drakeKilled = blueDrakes;
    });
    this.drakeKilledService.getDrakesByGameAndTeam(this.game, this.game.teamRed).subscribe((redDrakes) => 
    {
      this.redSide.drakeKilled = redDrakes;
    });
  }

}
