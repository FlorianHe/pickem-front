import { Injectable } from '@angular/core';
import { DrakeKilled } from '../shared/interfaces/drakeKilled';
import { PICKEM_API } from '../shared/globals/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../shared/interfaces/game';
import { Team } from '../shared/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class DrakeKilledService {

  constructor(private http: HttpClient) { }

  getDrakeKilled(): Observable<DrakeKilled[]> {
    return this.http.get<DrakeKilled[]>(PICKEM_API.baseDrake);
  }

  getDrakeKilledById(id: number): Observable<DrakeKilled> {
    return this.http.get<DrakeKilled>(`${PICKEM_API.baseDrake}/${id}`);
  }

  getDrakesByGameAndTeam(game:Game, team:Team): Observable<DrakeKilled[]> {
    return this.http.get<DrakeKilled[]>(PICKEM_API.baseDrakeKilled+'/game/'+game.id+"/team/"+team.id);
  }


  createDrakeKilled(drakeKilled : DrakeKilled): Observable<DrakeKilled> {
    return this.http.post<DrakeKilled>(`${PICKEM_API.baseDrakeKilled}`, drakeKilled);
  }
}
