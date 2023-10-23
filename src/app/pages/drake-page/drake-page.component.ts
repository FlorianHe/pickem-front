import { Component, OnInit } from '@angular/core';
import { DrakeService } from 'src/app/services/drake.service';
import { DrakeKilledNumber } from 'src/app/shared/interfaces/drakeKilledNumber';

@Component({
  selector: 'app-drake-page',
  templateUrl: './drake-page.component.html',
  styleUrls: ['./drake-page.component.scss']
})
export class DrakePageComponent implements OnInit {

  drakes! : DrakeKilledNumber[]
  constructor(private drakeService : DrakeService) { }


  ngOnInit(): void {
    this.drakeService.getDrakeKilledAmount().subscribe((drakes) => {
      this.drakes = drakes.sort((a, b) => b.amount - a.amount);
    })
  }

}
