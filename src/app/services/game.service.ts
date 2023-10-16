import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../shared/interfaces/game';
import { PICKEM_API } from '../shared/globals/api';
import { BO } from '../shared/interfaces/bO';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame);
  }

  getGamesByBO(bo: BO) : Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame+"/bo/"+bo.id);
  }

  getLongestGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame+"/duration?order=DESC&limit=3")
  }

  getShortestGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame+"/duration?order=ASC&limit=3")
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(PICKEM_API.baseGame, game);
  }
}
