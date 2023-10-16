import { Injectable } from '@angular/core';
import { Team } from '../shared/interfaces/team';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PICKEM_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(PICKEM_API.baseTeam);
  }
}
