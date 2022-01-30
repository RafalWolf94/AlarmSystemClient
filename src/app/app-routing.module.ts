import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from "./as-modules/statistics/statistics.component";
import { AppuserComponent } from "./as-modules/appuser/appuser.component";
import { LogEventsComponent } from "./as-modules/log-events/log-events.component";
import { HomeComponent } from "./as-modules/home/pages/home.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'statistics', component: StatisticsComponent},
  {path:'appuser', component: AppuserComponent},
  {path:'log-events', component: LogEventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
