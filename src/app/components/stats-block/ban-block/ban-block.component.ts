import { Component, Input, OnInit } from '@angular/core';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';

@Component({
  selector: 'app-ban-block',
  templateUrl: './ban-block.component.html',
  styleUrls: ['./ban-block.component.scss']
})
export class BanBlockComponent implements OnInit {

  @Input() champion! : ChampionAmount
  constructor() { }

  ngOnInit(): void {
  }

}
