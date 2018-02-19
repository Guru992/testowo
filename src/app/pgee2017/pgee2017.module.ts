import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pgee2017StatsComponent } from './pgee2017-stats/pgee2017-stats.component';
import { Danepgee2017Service } from '../danepgee2017.service';
import { SharedModule } from '../shared-module/shared.module';
import {OrderModule} from 'ngx-order-pipe';
import { Pgee2017paryStatsComponent } from './pgee2017pary-stats/pgee2017pary-stats.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderModule
  ],
  exports: [Pgee2017StatsComponent],
  declarations: [Pgee2017StatsComponent, Pgee2017paryStatsComponent],
  providers: [Danepgee2017Service]
})
export class Pgee2017Module { }
