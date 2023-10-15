import { Injectable } from '@angular/core';
import { PentakillAmount } from '../shared/interfaces/pentakillAmount';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PICKEM_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class PentakillService {

  constructor(private http: HttpClient) { }

  getPentakills(): Observable<PentakillAmount[]> {
    return this.http.get<PentakillAmount[]>(PICKEM_API.basePentakill);
  }

}
