import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-team-create-block',
  templateUrl: './team-create-block.component.html',
  styleUrls: ['./team-create-block.component.scss']
})
export class TeamCreateBlockComponent implements OnInit {

  @Output() teamPicked: EventEmitter<Team> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTeamPicked(team: Team): void {
      this.teamPicked.emit(team);
  }
}
