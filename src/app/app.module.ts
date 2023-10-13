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

import {MatExpansionModule} from '@angular/material/expansion';
import { PentakillPageComponent } from './pages/pentakill-page/pentakill-page.component';
import { DurationPageComponent } from './pages/duration-page/duration-page.component';
import { DurationBlockComponent } from './components/duration-block/duration-block.component';
import { SpaceToUnderscorePipe } from './pipes/space-to-underscore.pipe';
import { PlayerBlockComponent } from './components/player-block/player-block.component';
import { PentakillBlockComponent } from './components/pentakill-block/pentakill-block.component';

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
    PentakillBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
