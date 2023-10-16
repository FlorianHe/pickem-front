import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  teams!: Team[];
  selectedTeam : Team | null = null;
  showOptions = false;
  @Output() teamPicked : EventEmitter<Team> = new EventEmitter();

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    })
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectTeam(team:Team) {
    this.selectedTeam = team
    this.teamPicked.emit(team);
    this.toggleOptions();
  }

}
