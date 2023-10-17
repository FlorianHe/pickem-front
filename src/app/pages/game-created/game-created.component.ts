import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-game-created',
  templateUrl: './game-created.component.html',
  styleUrls: ['./game-created.component.scss']
})
export class GameCreatedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToCreate() : void {
    this.router.navigate([APP_ROUTES.create]);
  }

  navigateToGames() : void {
    this.router.navigate([APP_ROUTES.games]);
  }
}
