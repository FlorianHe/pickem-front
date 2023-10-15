import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../shared/interfaces/player';
import { PICKEM_API } from '../shared/globals/api';
import { Team } from '../shared/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersByTeam(team:Team): Observable<Player[]> {
    return this.http.get<Player[]>(PICKEM_API.basePlayer+'/team/'+team.id);
  }
}
