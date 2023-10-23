import { Component, Input, OnInit } from '@angular/core';
import { PickService } from 'src/app/services/pick.service';
import { ChampionAmount } from 'src/app/shared/interfaces/championAmount';
import { Pick } from 'src/app/shared/interfaces/pick';

@Component({
  selector: 'app-pick-block',
  templateUrl: './pick-block.component.html',
  styleUrls: ['./pick-block.component.scss']
})
export class PickBlockComponent implements OnInit {

  @Input() champion! : ChampionAmount;

  constructor() { }

  ngOnInit(): void {

  }

}
