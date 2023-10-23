import { Component, Input, OnInit } from '@angular/core';
import { Winrate } from 'src/app/shared/interfaces/winrate';

@Component({
  selector: 'app-winrate-block',
  templateUrl: './winrate-block.component.html',
  styleUrls: ['./winrate-block.component.scss']
})
export class WinrateBlockComponent implements OnInit {
  @Input() winrate! : Winrate;
  constructor() { }

  ngOnInit(): void {
  }

}
