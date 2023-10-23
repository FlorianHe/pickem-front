import { Injectable } from '@angular/core';
import { Ban } from '../shared/interfaces/ban';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PICKEM_API } from '../shared/globals/api';
import { Game } from '../shared/interfaces/game';
import { Team } from '../shared/interfaces/team';
import { ChampionAmount } from '../shared/interfaces/championAmount';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  constructor(private http: HttpClient) { }

  getBans(): Observable<Ban[]> {
    return this.http.get<Ban[]>(PICKEM_API.baseBan);
  }

  getBansByGameAndTeam(game:Game, team:Team): Observable<Ban[]> {
    return this.http.get<Ban[]>(PICKEM_API.baseBan+'/game/'+game.id+"/team/"+team.id);
  }

  getBanAmount(): Observable<ChampionAmount[]> {
    return this.http.get<ChampionAmount[]>(PICKEM_API.baseBan+"/amount")
  }

  createBan(ban : Ban): Observable<Ban> {
    return this.http.post<Ban>(PICKEM_API.baseBan, ban)
  }
}
