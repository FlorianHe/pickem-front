import { Injectable } from '@angular/core';
import { Side } from '../shared/interfaces/side';
import { BehaviorSubject, Observable } from 'rxjs';
import { BO } from '../shared/interfaces/bO';
import { Pentakill } from '../shared/interfaces/pentakill';
import { KDA } from '../shared/interfaces/kDA';
import { Team } from '../shared/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  redSide : Side = {
    team: {id : 0, name : ""},
    ban: [],
    pick: [],
    drakeKilled: [],
  };
  blueSide : Side = {
    team: {id : 0, name : ""},
    ban: [],
    pick: [],
    drakeKilled: [],
  };
  kDA: KDA[] = []
  bO: BO = {id:0};
  baronSteal!: number;
  duration!: string;
  pentakill: Pentakill[] = [];
  winner: Team | null = null

  private redLockSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  redLock: Observable<boolean> = this.redLockSubject.asObservable();

  private blueLockSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  blueLock: Observable<boolean> = this.blueLockSubject.asObservable();

  constructor() { }

  public updateRedLockState(state:boolean) {
      this.redLockSubject.next(state)
  }

  public updateBlueLockState(state:boolean) {
    this.blueLockSubject.next(state)
  }

  public isSideValid() : boolean {
    const regex = /^\d+:\d+$/;
    if (this.bO.id == 0)
      return false;
    if (this.redSide.team.id == 0)
      return false;
    if (this.redSide.ban.length < 0 && this.redSide.ban.length > 5)
      return false;
    if (this.redSide.pick.length != 5)
      return false;
    if (this.blueSide.team.id == 0)
      return false;
    if (this.blueSide.ban.length < 0 && this.blueSide.ban.length > 5)
      return false;
    if (this.blueSide.pick.length != 5)
      return false;
    if (this.kDA.length != 10)
      return false;
    if (this.winner === null)
      return false
    if (regex.test(this.duration) === false)
      return false
    return true;
  }
}
