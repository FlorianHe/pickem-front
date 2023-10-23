import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PICKEM_API } from '../shared/globals/api';
import { Pick } from '../shared/interfaces/pick';
import { Game } from '../shared/interfaces/game';
import { Team } from '../shared/interfaces/team';
import { ChampionAmount } from '../shared/interfaces/championAmount';
import { Winrate } from '../shared/interfaces/winrate';

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

  getPickAmount(): Observable<ChampionAmount[]> {
    return this.http.get<ChampionAmount[]>(PICKEM_API.basePick+"/amount")
  }

  getDeathAmount(): Observable<ChampionAmount[]> {
    return this.http.get<ChampionAmount[]>(PICKEM_API.basePick+"/death")
  }

  getMultiRoles(): Observable<ChampionAmount[]> {
    return this.http.get<ChampionAmount[]>(PICKEM_API.basePick+"/role")
  }

  getWinrateByChampion(): Observable<Winrate[]> {
    return this.http.get<Winrate[]>(PICKEM_API.basePick+"/winrate")
  }
}
