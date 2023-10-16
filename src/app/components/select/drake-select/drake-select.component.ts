import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() drakePicked : EventEmitter<Drake> = new EventEmitter();
  @Input() clear! : boolean

  constructor(private drakeService : DrakeService) { }

  ngOnInit(): void {
    this.drakeService.getDrakes().subscribe((drakes) => {
      this.drakes = drakes;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clear']) {
      this.selectedDrake = null
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectDrake(drake:Drake) {
    this.selectedDrake = drake
    this.drakePicked.emit(drake)
    this.toggleOptions();
  }

}
