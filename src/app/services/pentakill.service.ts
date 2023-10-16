import { Injectable } from '@angular/core';
import { PentakillAmount } from '../shared/interfaces/pentakillAmount';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PICKEM_API } from '../shared/globals/api';
import { Pentakill } from '../shared/interfaces/pentakill';

@Injectable({
  providedIn: 'root'
})
export class PentakillService {

  constructor(private http: HttpClient) { }

  getPentakills(): Observable<PentakillAmount[]> {
    return this.http.get<PentakillAmount[]>(PICKEM_API.basePentakill);
  }

  createPentakill(pentakill : Pentakill): Observable<Pentakill> {
    return this.http.post<Pentakill>(PICKEM_API.basePentakill, pentakill)
  }

}
