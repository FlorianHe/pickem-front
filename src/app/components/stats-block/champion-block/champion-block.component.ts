import { Component, Input, OnInit } from '@angular/core';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';

@Component({
  selector: 'app-champion-block',
  templateUrl: './champion-block.component.html',
  styleUrls: ['./champion-block.component.scss']
})
export class ChampionBlockComponent implements OnInit {
  @Input() champion! : ChampionAmount;

  constructor() { }

  ngOnInit(): void {
  }

}
