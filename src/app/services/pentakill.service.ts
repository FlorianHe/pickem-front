import { Injectable } from '@angular/core';
import { Pentakill } from '../shared/interfaces/pentakill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PICKEM_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class PentakillService {

  constructor(private http: HttpClient) { }

  getPentakills(): Observable<Pentakill[]> {
    return this.http.get<Pentakill[]>(PICKEM_API.basePentakill);
  }

}
