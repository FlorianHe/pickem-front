import { Component, Input, OnInit } from '@angular/core';
import { PentakillAmount } from 'src/app/shared/interfaces/pentakillAmount';

@Component({
  selector: 'app-pentakill-block',
  templateUrl: './pentakill-block.component.html',
  styleUrls: ['./pentakill-block.component.scss']
})
export class PentakillBlockComponent implements OnInit {

  @Input() pentakill! : PentakillAmount

  constructor() { }

  ngOnInit(): void {
  }

}
