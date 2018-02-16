import { Component, OnInit } from '@angular/core';
import { Rider } from "../riders/rider";
import { Danepgee2017Service } from '../../danepgee2017.service';

@Component({
  selector: 'gs-pgee2017-stats',
  templateUrl: './pgee2017-stats.component.html',
  styleUrls: ['./pgee2017-stats.component.less']
})
export class Pgee2017StatsComponent {
pgee2017: Array<any>;
  constructor(private _danePgee2017Service: Danepgee2017Service) {
  	this._danePgee2017Service.getPgee2017().subscribe(response => this.pgee2017 = response);
  }
}