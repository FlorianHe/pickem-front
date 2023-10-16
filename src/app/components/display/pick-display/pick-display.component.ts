import { Component, Input, OnInit } from '@angular/core';
import { Pick } from 'src/app/shared/interfaces/pick';

@Component({
  selector: 'app-pick-display',
  templateUrl: './pick-display.component.html',
  styleUrls: ['./pick-display.component.scss']
})
export class PickDisplayComponent implements OnInit {

  @Input() picks! : Pick[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
