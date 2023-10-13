import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/globals/routes';
import { DrakePageComponent } from './pages/drake-page/drake-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
