import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppuserComponent } from './appuser/appuser.component';
import { LogEventsComponent } from './log-events/log-events.component';
import { HomeComponent } from "./home/pages/home.component";
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { DeviceCardComponent } from './home/components/device-card/device-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    StatisticsComponent,
    AppuserComponent,
    LogEventsComponent,
    HomeContainerComponent,
    DeviceCardComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsModuleModule { }
