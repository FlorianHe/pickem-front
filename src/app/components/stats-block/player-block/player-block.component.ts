import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/interfaces/player';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.scss']
})
export class PlayerBlockComponent implements OnInit {

  @Input() player! : Player
  constructor() { }

  ngOnInit(): void {
  }

}
