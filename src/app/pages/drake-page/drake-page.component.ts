import { Component, OnInit } from '@angular/core';
import { DrakeService } from 'src/app/services/drake.service';
import { Drake } from 'src/app/shared/interfaces/drake';

@Component({
  selector: 'app-drake-page',
  templateUrl: './drake-page.component.html',
  styleUrls: ['./drake-page.component.scss']
})
export class DrakePageComponent implements OnInit {

  drakes! : Drake[]
  constructor(private drakeService : DrakeService) { }


  ngOnInit(): void {
    this.drakeService.getDrakes().subscribe((drakes) => {
      this.drakes = drakes//.sort((a, b) => b.killed - a.killed);
    })
  }

}
