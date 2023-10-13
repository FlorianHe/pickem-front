import { Component, Input, OnInit } from '@angular/core';
import { Drake } from 'src/app/shared/interfaces/drake';

@Component({
  selector: 'app-drake-block',
  templateUrl: './drake-block.component.html',
  styleUrls: ['./drake-block.component.scss']
})
export class DrakeBlockComponent implements OnInit {

  @Input() drake! : Drake;


  constructor() { }

  ngOnInit(): void {
  }

}
