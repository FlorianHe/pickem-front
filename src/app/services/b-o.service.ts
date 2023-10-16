import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BO } from '../shared/interfaces/bO';
import { Observable } from 'rxjs';
import { PICKEM_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class BOService {


  constructor(private http: HttpClient) { }

  getBOs(): Observable<BO[]> {
    return this.http.get<BO[]>(PICKEM_API.baseBO)
  }
  getLastBO(): Observable<BO> {
    return this.http.get<BO>(PICKEM_API.baseBO+'/last');
  }
  createBO(bO : BO): Observable<BO> {
    return this.http.post<BO>(PICKEM_API.baseBO, bO);
  }
}
