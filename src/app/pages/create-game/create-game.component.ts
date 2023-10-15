import { Component, OnInit } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { FormsModule } from '@angular/forms';
import { BO } from 'src/app/shared/interfaces/bO';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  selectedChampion: Champion | null = null;
  isSelectOpen = false;
  champions!: Champion[];
  bo : BO = {id : 0};

  constructor(private championService : ChampionService) { }

  ngOnInit(): void {
    this.championService.getChampions().subscribe((champions) => {
      this.champions = champions;
    })
  }

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  selectOption(champion: Champion) {
    this.selectedChampion = champion;
    this.isSelectOpen = false;
  }

}
