import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drake } from '../shared/interfaces/drake';
import { Observable } from 'rxjs';
import { PICKEM_API } from '../shared/globals/api';

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

  createDrake(drake : Drake): Observable<Drake> {
    return this.http.post<Drake>(`${PICKEM_API.baseDrake}`, drake);
  }
}
