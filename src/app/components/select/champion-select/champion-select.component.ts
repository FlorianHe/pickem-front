import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  champions!: Champion[];
  selectedChampion : Champion | null = null;
  showOptions = false;
  @Output() championPicked = new EventEmitter<Picking>();

  constructor(private championService : ChampionService) { }

  ngOnInit(): void {
    this.championService.getChampions().subscribe((champions) => {
      this.champions = champions;
    })
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectChampion(champion:Champion) {
    let unpick : Champion | null = null;
    if (this.selectedChampion != null) {
      unpick = this.selectedChampion
    }
    this.selectedChampion = champion
    this.championPicked.emit({pick: champion, unpick: unpick})
    this.toggleOptions();
  }

  groupChampions(champions: Champion[], rowSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < champions.length; i += rowSize) {
      result.push(champions.slice(i, i + rowSize));
    }
    return result;
  }

}
