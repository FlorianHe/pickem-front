import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { SideService } from 'src/app/services/side.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { Picking } from 'src/app/shared/interfaces/picking';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  @Input() i! : number
  @Output() championPicked = new EventEmitter<Picking>();
  champions!: Champion[];
  selectedChampion : Champion | null = null;
  showOptions = false;

  constructor(private championService : ChampionService, private sideService : SideService) { }

  ngOnInit(): void {
    /*const isChampionInPicks = (champion: Champion) => {
      return this.sideService.blueSide.pick.find(pick => pick.champion.id === champion.id) !== undefined;
    };*/
    this.championService.getChampions().subscribe((champions) => {
      //for (let champion of champions)
      //  console.log(isChampionInPicks(champion))
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
