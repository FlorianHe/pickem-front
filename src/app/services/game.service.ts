import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../shared/interfaces/game';
import { PICKEM_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame);
  }

  getLongestGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame+"/duration?order=DESC&limit=3")
  }

  getShortestGames(): Observable<Game[]> {
    return this.http.get<Game[]>(PICKEM_API.baseGame+"/duration?order=ASC&limit=3")
  }
}
