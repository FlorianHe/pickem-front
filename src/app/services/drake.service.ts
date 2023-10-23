import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drake } from '../shared/interfaces/drake';
import { Observable } from 'rxjs';
import { PICKEM_API } from '../shared/globals/api';
import { DrakeKilledNumber } from '../shared/interfaces/drakeKilledNumber';

@Injectable({
  providedIn: 'root'
})
export class DrakeService {

  constructor(private http: HttpClient) { }

  getDrakes(): Observable<Drake[]> {
    return this.http.get<Drake[]>(PICKEM_API.baseDrake);
  }

  getDrakeById(id: number): Observable<Drake> {
    return this.http.get<Drake>(`${PICKEM_API.baseDrake}/${id}`);
  }

  getDrakeKilledAmount(): Observable<DrakeKilledNumber[]> {
    return this.http.get<DrakeKilledNumber[]>(PICKEM_API.baseDrakeKilled + "/amount");
  }

}
