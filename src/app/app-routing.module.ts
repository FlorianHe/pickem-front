import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/globals/routes';
import { DrakePageComponent } from './pages/drake-page/drake-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
