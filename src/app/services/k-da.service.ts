import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KDA } from '../shared/interfaces/kDA';
import { PICKEM_API } from '../shared/globals/api';
import { Game } from '../shared/interfaces/game';
import { Player } from '../shared/interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class KDAService {

  constructor(private http: HttpClient) { }

  getKDAs(): Observable<KDA[]> {
    return this.http.get<KDA[]>(PICKEM_API.baseKDA);
  }

  getKDAByGameAndPlayer(game : Game, player : Player): Observable<KDA> {
    return this.http.get<KDA>(PICKEM_API.baseKDA + '/game/' + game.id + '/player/' + player.id)
  }

  createKDA(kDA : KDA): Observable<KDA> {
    return this.http.post<KDA>(PICKEM_API.baseKDA, kDA)
  }
}
