import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrakeBlockComponent } from './components/drake-block/drake-block.component';
import { KdaBlockComponent } from './components/kda-block/kda-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrakePageComponent } from './pages/drake-page/drake-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { PentakillPageComponent } from './pages/pentakill-page/pentakill-page.component';
import { DurationPageComponent } from './pages/duration-page/duration-page.component';
import { DurationBlockComponent } from './components/duration-block/duration-block.component';
import { SpaceToUnderscorePipe } from './pipes/space-to-underscore.pipe';
import { PlayerBlockComponent } from './components/player-block/player-block.component';
import { PentakillBlockComponent } from './components/pentakill-block/pentakill-block.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { ChampionSelectComponent } from './components/select/champion-select/champion-select.component';
import { BanBlockComponent } from './components/ban-block/ban-block.component';
import { TeamBlockComponent } from './components/team-block/team-block.component';
import { TeamSelectComponent } from './components/select/team-select/team-select.component';
import { SideBlockComponent } from './components/side-block/side-block.component';
import { PickBlockComponent } from './components/pick-block/pick-block.component';
import { SideCreateBlockComponent } from './components/create/side-create-block/side-create-block.component';
import { TeamCreateBlockComponent } from './components/create/team-create-block/team-create-block.component';
import { BanCreateBlockComponent } from './components/create/ban-create-block/ban-create-block.component';
import { DrakeCreateBlockComponent } from './components/create/drake-create-block/drake-create-block.component';
import { PickCreateBlockComponent } from './components/create/pick-create-block/pick-create-block.component';
import { PlayerCreateBlockComponent } from './components/create/player-create-block/player-create-block.component';
import { DrakeSelectComponent } from './components/select/drake-select/drake-select.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { GameDisplayComponent } from './components/display/game-display/game-display.component';
import { BoDisplayComponent } from './components/display/bo-display/bo-display.component';
import { BanDisplayComponent } from './components/display/ban-display/ban-display.component';
import { DrakeDisplayComponent } from './components/display/drake-display/drake-display.component';
import { PickDisplayComponent } from './components/display/pick-display/pick-display.component';
import { MatchDisplayComponent } from './components/display/match-display/match-display.component';
import { KdaDisplayComponent } from './components/display/kda-display/kda-display.component';
import { LegalComponent } from './pages/legal/legal.component';
import { GameCreatedComponent } from './pages/game-created/game-created.component';

@NgModule({
  declarations: [
    AppComponent,
    DrakeBlockComponent,
    KdaBlockComponent,
    DrakePageComponent,
    HomePageComponent,
    PentakillPageComponent,
    DurationPageComponent,
    DurationBlockComponent,
    SpaceToUnderscorePipe,
    PlayerBlockComponent,
    PentakillBlockComponent,
    CreateGameComponent,
    ChampionSelectComponent,
    BanBlockComponent,
    TeamBlockComponent,
    TeamSelectComponent,
    SideBlockComponent,
    PickBlockComponent,
    SideCreateBlockComponent,
    TeamCreateBlockComponent,
    BanCreateBlockComponent,
    DrakeCreateBlockComponent,
    PickCreateBlockComponent,
    PlayerCreateBlockComponent,
    DrakeSelectComponent,
    GamesPageComponent,
    GameDisplayComponent,
    BoDisplayComponent,
    BanDisplayComponent,
    DrakeDisplayComponent,
    PickDisplayComponent,
    MatchDisplayComponent,
    KdaDisplayComponent,
    LegalComponent,
    GameCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
