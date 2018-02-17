import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Danepgee2017Service } from './danepgee2017.service';
import { Pgee2017Module } from './pgee2017/pgee2017.module';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import {CoreModule} from "./core-module/core.module";
import {RouterModule, Router} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {Pgee2017RoutingModule} from "./pgee2017/pgee2017-routing.module";
import {Pgee2017StatsComponent} from "./pgee2017/pgee2017-stats/pgee2017-stats.component";
import { HeaderComponent } from "./shared-module/header/header.component";
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Pgee2017Module,
    CoreModule,
    AppRoutingModule,
    Pgee2017RoutingModule,
    OrderModule
  ],
  providers: [Danepgee2017Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localePl, 'pl');
