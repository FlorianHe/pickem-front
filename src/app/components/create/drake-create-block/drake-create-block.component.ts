import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Drake } from 'src/app/shared/interfaces/drake';

@Component({
  selector: 'app-drake-create-block',
  templateUrl: './drake-create-block.component.html',
  styleUrls: ['./drake-create-block.component.scss']
})
export class DrakeCreateBlockComponent implements OnInit {

  @Output() drakePicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDrakePicked(drake: string): void {
    this.drakePicked.emit(drake);
  }
}
