import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ban } from 'src/app/shared/interfaces/ban';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';

@Component({
  selector: 'app-ban-create-block',
  templateUrl: './ban-create-block.component.html',
  styleUrls: ['./ban-create-block.component.scss']
})
export class BanCreateBlockComponent implements OnInit {

  @Output() championPicked = new EventEmitter<Picking>();

  constructor() { }

  ngOnInit(): void {
  }

  onChampionPicked(champion: Picking ): void {
    this.championPicked.emit(champion);
  }

}
