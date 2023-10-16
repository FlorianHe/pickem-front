import { Component, OnInit } from '@angular/core';
import { BOService } from 'src/app/services/b-o.service';
import { BO } from 'src/app/shared/interfaces/bO';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  bos! : BO[]

  constructor(private bOService : BOService) { }

  ngOnInit(): void {
    this.bOService.getBOs().subscribe((bos) => {
      this.bos = bos
    })
  }

}
