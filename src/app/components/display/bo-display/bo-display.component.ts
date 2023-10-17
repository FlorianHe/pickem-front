import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { BO } from 'src/app/shared/interfaces/bO';
import { Game } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-bo-display',
  templateUrl: './bo-display.component.html',
  styleUrls: ['./bo-display.component.scss']
})
export class BoDisplayComponent implements OnInit {

  @Input() bo! : BO;
  games! : Game[]
  homeWin : number = 0;
  awayWin : number = 0;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGamesByBO(this.bo).subscribe((games) => {
      this.games = games
      console.log(games)
      const teamHome = games[0].teamBlue.id;
      const teamAway = games[0].teamRed.id;
      games.forEach((game) => {
        if (teamHome === game.teamWinner.id) {
          this.homeWin++;
        } else if (teamAway === game.teamWinner.id) {
          this.awayWin++;
        }
      })
    })
  }

}
