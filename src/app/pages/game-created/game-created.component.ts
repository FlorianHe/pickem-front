import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideService } from 'src/app/services/side.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-game-created',
  templateUrl: './game-created.component.html',
  styleUrls: ['./game-created.component.scss']
})
export class GameCreatedComponent implements OnInit {

  constructor(private router : Router, private sideService : SideService) { }

  ngOnInit(): void {
  }

  navigateToCreate() : void {
    this.sideService.reset();
    this.router.navigate([APP_ROUTES.create]);
  }

  navigateToGames() : void {
    this.sideService.reset();
    this.router.navigate([APP_ROUTES.games]);
  }
}
