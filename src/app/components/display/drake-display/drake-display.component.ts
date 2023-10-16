import { Component, Input, OnInit } from '@angular/core';
import { DrakeKilled } from 'src/app/shared/interfaces/drakeKilled';

@Component({
  selector: 'app-drake-display',
  templateUrl: './drake-display.component.html',
  styleUrls: ['./drake-display.component.scss']
})
export class DrakeDisplayComponent implements OnInit {

  @Input() drakes! : DrakeKilled[]

  constructor() { }

  ngOnInit(): void {
  }

}
