import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-duration-block',
  templateUrl: './duration-block.component.html',
  styleUrls: ['./duration-block.component.scss']
})
export class DurationBlockComponent implements OnInit {

  @Input() game! : Game;

  constructor() { }

  ngOnInit(): void {
  }

}
