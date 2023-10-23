import { Component, OnInit } from '@angular/core';
import { PickService } from 'src/app/services/pick.service';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

  constructor(private pickService : PickService) { }

  ngOnInit(): void {
    
    
  }

}
