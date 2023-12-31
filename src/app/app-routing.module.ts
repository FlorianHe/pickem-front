import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/globals/routes';
import { DrakePageComponent } from './pages/drake-page/drake-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { LegalComponent } from './pages/legal/legal.component';
import { GameCreatedComponent } from './pages/game-created/game-created.component';

const routes: Routes = [
  {
    path: APP_ROUTES.rIndex,
    component: HomePageComponent,
    title: "Pick'Em | Home"
  },
  {
    path: APP_ROUTES.rDrake,
    component: DrakePageComponent,
    title: "Pick'Em | Drake"
  },
  {
    path: APP_ROUTES.rCreate,
    component: CreateGameComponent,
    title: "Pick'Em | Create datas"
  },
  {
    path: APP_ROUTES.rGames,
    component: GamesPageComponent,
    title: "Pick'Em | All the games"
  },
  {
    path: APP_ROUTES.rLegal,
    component: LegalComponent,
    title: "Pick'Em | legals"
  },
  {
    path: APP_ROUTES.rGameCreated,
    component: GameCreatedComponent,
    title: "Pick'Em | Game created successfully"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
