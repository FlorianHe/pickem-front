import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DrakeService } from 'src/app/services/drake.service';
import { Drake } from 'src/app/shared/interfaces/drake';

@Component({
  selector: 'app-drake-select',
  templateUrl: './drake-select.component.html',
  styleUrls: ['./drake-select.component.scss']
})
export class DrakeSelectComponent implements OnInit {

  drakes!: Drake[];
  selectedDrake : Drake | null = null;
  showOptions = false;
  @Output() drakePicked : EventEmitter<string> = new EventEmitter();
  
  constructor(private drakeService : DrakeService) { }

  ngOnInit(): void {
    this.drakeService.getDrakes().subscribe((drakes) => {
      this.drakes = drakes;
    })
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectDrake(drake:Drake) {
    this.selectedDrake = drake
    this.drakePicked.emit(drake.type)
    this.toggleOptions();
  }

}
