import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { BO } from 'src/app/shared/interfaces/bO';
import { Game } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.scss']
})
export class MatchDisplayComponent implements OnInit {

  @Input() bo! : BO;
  games! : Game[]

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.gameService.getGamesByBO(this.bo).subscribe((games) => {
      this.games = games
    })
  }

}
