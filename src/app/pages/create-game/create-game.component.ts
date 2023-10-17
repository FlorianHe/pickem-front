import { Component, OnInit } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { Champion } from 'src/app/shared/interfaces/champion';
import { BO } from 'src/app/shared/interfaces/bO';
import { SideService } from 'src/app/services/side.service';
import { BOService } from 'src/app/services/b-o.service';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/shared/interfaces/game';
import { Team } from 'src/app/shared/interfaces/team';
import { PentakillService } from 'src/app/services/pentakill.service';
import { PickService } from 'src/app/services/pick.service';
import { BanService } from 'src/app/services/ban.service';
import { concatMap, from } from 'rxjs';
import { Pick } from 'src/app/shared/interfaces/pick';
import { Ban } from 'src/app/shared/interfaces/ban';
import { DrakeKilled } from 'src/app/shared/interfaces/drakeKilled';
import { DrakeKilledService } from 'src/app/services/drake-killed.service';
import { KDAService } from 'src/app/services/k-da.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  selectedChampion: Champion | null = null;
  isSelectOpen = false;
  champions!: Champion[];
  bo! : BO;
  duration!:string;
  baronSteal:number = 0
  isDurationValid : boolean = false
  game! : Game
  blueTeamWins: boolean = false;
  redTeamWins: boolean = false;

  constructor(private championService : ChampionService,
                private sideService : SideService,
                private bOService : BOService,
                private gameService : GameService,
                private pentakillService: PentakillService,
                private pickService: PickService,
                private banService: BanService,
                private drakeKilledService: DrakeKilledService,
                private kDAService : KDAService,
                private router: Router) { }

  ngOnInit(): void {
    this.championService.getChampions().subscribe((champions) => {
      this.champions = champions;
    })
    this.bOService.getLastBO().subscribe((bo) => {
      if (bo == null) {
        this.bo = {id : 1}
        this.sideService.bO = this.bo
      } else {
        bo.id += 1;
        this.bo = bo
        this.sideService.bO = this.bo
      }
    })
  }

  sendBO() {
    this.bOService.createBO(this.sideService.bO).subscribe((bO) => {
      this.bo = bO;
      const game : Game = {id: 0, baronSteals: this.baronSteal, duration: this.sideService.duration, bo: this.bo, teamBlue: this.sideService.blueSide.team, teamRed: this.sideService.redSide.team, teamWinner: this.sideService.winner as Team}
      this.gameService.createGame(game).subscribe((game) => {
        this.game = game;
        this.sideService.pentakill.forEach(pentakill => {
          pentakill.game = this.game;
        });
        from(this.sideService.pentakill).pipe(
          concatMap(pentakill => this.pentakillService.createPentakill(pentakill))
        )
        .subscribe(
          (result) => {
            console.log('Pentakill created:', result);
          },
          (error) => {
            console.error('Error creating Pentakill:', error);
          }
        );
        this.sideService.blueSide.pick.forEach(blueSidePick => {
          blueSidePick.game = this.game;
        });
        this.sideService.redSide.pick.forEach(redSidePick => {
          redSidePick.game = this.game;
        });
        const picks : Pick[] = this.sideService.blueSide.pick.concat(this.sideService.redSide.pick)        
        from(picks).pipe(
          concatMap(pick => this.pickService.createPick(pick))
        )
        .subscribe(
          (result) => {
            console.log('Pick created:', result);
          },
          (error) => {
            console.error('Error creating Pick:', error);
          }
        );
        this.sideService.blueSide.ban.forEach(blueSideBan => {
          blueSideBan.game = this.game;
        });
        this.sideService.redSide.ban.forEach(redSideBan => {
          redSideBan.game = this.game;
        });
        const bans : Ban[] = this.sideService.blueSide.ban.concat(this.sideService.redSide.ban)        
        from(bans).pipe(
          concatMap(ban => this.banService.createBan(ban))
        )
        .subscribe(
          (result) => {
            console.log('Ban created:', result);
          },
          (error) => {
            console.error('Error creating Ban:', error);
          }
        );
        this.sideService.blueSide.drakeKilled.forEach(blueSideDrakeKilled => {
          blueSideDrakeKilled.game = this.game;
        });
        this.sideService.redSide.drakeKilled.forEach(redSideDrakeKilled => {
          redSideDrakeKilled.game = this.game;
        });
        const drakes : DrakeKilled[] = this.sideService.blueSide.drakeKilled.concat(this.sideService.redSide.drakeKilled)        
        from(drakes).pipe(
          concatMap(drake => this.drakeKilledService.createDrakeKilled(drake))
        )
        .subscribe(
          (result) => {
            console.log('Drake created:', result);
          },
          (error) => {
            console.error('Error creating Drake:', error);
          }
        );
        this.sideService.kDA.forEach(kDA => {
          kDA.game = this.game;
        });
        from(this.sideService.kDA).pipe(
          concatMap(kDA => this.kDAService.createKDA(kDA))
        )
        .subscribe(
          (result) => {
            console.log('KDA created:', result);
          },
          (error) => {
            console.error('Error creating KDA:', error);
          }
        );
      })
    })
    this.router.navigate([APP_ROUTES.gameCreated]);
  }

  isValid(): boolean {
    return this.sideService.isSideValid();
  }

  isBlueTeamValid() : boolean {
    return this.sideService.blueSide.team.id !== 0;
  }

  isRedTeamValid() : boolean {
    return this.sideService.redSide.team.id !== 0;
  }

  onDurationChange(): void {
    const regex = /^\d+:\d+$/;
    this.isDurationValid = regex.test(this.duration);
    this.sideService.duration = this.duration;
  }

  onBOChange() : void {
    this.sideService.bO = this.bo
  }

  onWinnerChange(winner: 'blue' | 'red') : void {
    if (winner === 'blue') {
      this.redTeamWins = false;
      this.sideService.winner = this.sideService.blueSide.team
    } else if (winner === "red") {
      this.blueTeamWins = false;
      this.sideService.winner = this.sideService.redSide.team
    }
    if (!this.blueTeamWins && !this.redTeamWins) {
      this.sideService.winner = null
    }
  }
}
