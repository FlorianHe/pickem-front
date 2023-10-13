import { Component, Input, OnInit } from '@angular/core';
import { Pentakill } from 'src/app/shared/interfaces/pentakill';

@Component({
  selector: 'app-pentakill-block',
  templateUrl: './pentakill-block.component.html',
  styleUrls: ['./pentakill-block.component.scss']
})
export class PentakillBlockComponent implements OnInit {

  @Input() pentakill! : Pentakill

  constructor() { }

  ngOnInit(): void {
  }

}
