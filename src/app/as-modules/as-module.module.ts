import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/pages/home.component";
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { RoomStatusCardComponent } from './home/components/room-status-card/room-status-card.component';
import { RackStatusCardComponent } from './home/components/rack-status-card/rack-status-card.component';
import { SharedModule } from "../as-shared/shared.module";
import { StatisticsComponent } from "./statistics/pages/statistics.component";
import { AppuserComponent } from "./appuser/pages/appuser.component";
import { LogEventsComponent } from "./log-events/pages/log-events.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LogEventContainerComponent } from './log-events/log-event-container/log-event-container.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    StatisticsComponent,
    AppuserComponent,
    LogEventsComponent,
    HomeContainerComponent,
    RoomStatusCardComponent,
    RackStatusCardComponent,
    LogEventContainerComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AsModuleModule { }
