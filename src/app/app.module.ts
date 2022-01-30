import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsModuleModule } from "./as-modules/as-module.module";
import { NavBarComponent } from './as-core/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
