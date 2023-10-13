import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-duration-page',
  templateUrl: './duration-page.component.html',
  styleUrls: ['./duration-page.component.scss']
})
export class DurationPageComponent implements OnInit {

  longestGames! : Game[]
  shortestGames! : Game[]
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.gameService.getLongestGames().subscribe((longestGames) => {
      this.longestGames = longestGames;
    })
    this.gameService.getShortestGames().subscribe((shortestGames) => {
      this.shortestGames = shortestGames;
    })
  }

}
