import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pgee2017StatsComponent } from './pgee2017-stats/pgee2017-stats.component';
import { Danepgee2017Service } from '../danepgee2017.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Pgee2017StatsComponent],
  declarations: [Pgee2017StatsComponent],
  providers: [Danepgee2017Service]
})
export class Pgee2017Module { }
