import { Component, Input, OnInit } from '@angular/core';
import { Drake } from 'src/app/shared/interfaces/drake';
import { DrakeKilledNumber } from 'src/app/shared/interfaces/drakeKilledNumber';

@Component({
  selector: 'app-drake-block',
  templateUrl: './drake-block.component.html',
  styleUrls: ['./drake-block.component.scss']
})
export class DrakeBlockComponent implements OnInit {

  @Input() drake! : DrakeKilledNumber;


  constructor() { }

  ngOnInit(): void {
  }

}
