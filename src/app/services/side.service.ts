import { Injectable } from '@angular/core';
import { Side } from '../shared/interfaces/side';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  redSide! : Side
  blueSide! : Side
  redLock : boolean = false;
  blueLock : boolean = false;
  constructor() { }
}
