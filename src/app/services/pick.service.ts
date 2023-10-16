import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PICKEM_API } from '../shared/globals/api';
import { Pick } from '../shared/interfaces/pick';
import { Game } from '../shared/interfaces/game';
import { Team } from '../shared/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class PickService {

  constructor(private http: HttpClient) { }

  getPicks(): Observable<Pick[]> {
    return this.http.get<Pick[]>(PICKEM_API.basePick);
  }

  getPicksByGameAndTeam(game:Game, team:Team): Observable<Pick[]> {
    return this.http.get<Pick[]>(PICKEM_API.basePick+'/game/'+game.id+"/team/"+team.id);
  }

  createPick(pick : Pick): Observable<Pick> {
    return this.http.post<Pick>(PICKEM_API.basePick, pick)
  }
}
