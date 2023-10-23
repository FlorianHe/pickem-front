import { Component, Input, OnInit } from '@angular/core';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';

@Component({
  selector: 'app-death-block',
  templateUrl: './death-block.component.html',
  styleUrls: ['./death-block.component.scss']
})
export class DeathBlockComponent implements OnInit {
  @Input() champion! : ChampionAmount;
  
  constructor() { }

  ngOnInit(): void {
  }

}
