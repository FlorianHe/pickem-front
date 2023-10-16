import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideService } from 'src/app/services/side.service';
import { Drake } from 'src/app/shared/interfaces/drake';

@Component({
  selector: 'app-drake-create-block',
  templateUrl: './drake-create-block.component.html',
  styleUrls: ['./drake-create-block.component.scss']
})
export class DrakeCreateBlockComponent implements OnInit {

  @Input() sideColor!: string
  @Output() drakeKilled: EventEmitter<Drake> = new EventEmitter();
  clear: boolean = false;
  
  constructor(private sideService : SideService) { }

  ngOnInit(): void {
  }

  onDrakePicked(drake: Drake): void {
    this.drakeKilled.emit(drake);
  }

  onClear() {
    this.clear = !this.clear;
    if (this.sideColor === "red")
      this.sideService.redSide.drakeKilled = [];
    else if (this.sideColor === "blue")
      this.sideService.blueSide.drakeKilled = [];
  }
}
