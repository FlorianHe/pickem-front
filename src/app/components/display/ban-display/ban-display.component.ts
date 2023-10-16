import { Component, Input, OnInit } from '@angular/core';
import { Ban } from 'src/app/shared/interfaces/ban';

@Component({
  selector: 'app-ban-display',
  templateUrl: './ban-display.component.html',
  styleUrls: ['./ban-display.component.scss']
})
export class BanDisplayComponent implements OnInit {

  @Input() bans! : Ban[]

  constructor() { }

  ngOnInit(): void {
  }

}
