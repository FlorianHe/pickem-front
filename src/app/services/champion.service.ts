import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PICKEM_API } from '../shared/globals/api';
import { Champion } from '../shared/interfaces/champion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(PICKEM_API.baseChampion);
  }
}
