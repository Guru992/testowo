import { Component, OnInit } from '@angular/core';
import { Rider } from "../riders/rider";

@Component({
  selector: 'gs-pgee2017-stats',
  templateUrl: './pgee2017-stats.component.html',
  styleUrls: ['./pgee2017-stats.component.less']
})
export class Pgee2017StatsComponent implements OnInit {

	stats: Rider[] = [
	{
		MSC:1,
		ZAWODNIK:"Bartosz Zmarzlik",
		KLUB:"Gorzów",
		SREDNIA:2.376,
		PKT:215,
		BON:6,
		BIEGI:93,
		P3:45,
		P2:35,
		P1:10,
		P0:3,
		D:0,
		W:2,
		U:0,
		T:0,
		ZW: "48%",
		DOM:2.556,
		WYJAZD:2.208,
		TORA:2.542,
		TORB:2.238,
		TORC:2.35,
		TORD:2.357
	},
	{
		MSC:2,
		ZAWODNIK:"Artem Łaguta",
		KLUB:"Grudziądz",
		SREDNIA:2.170,
		PKT:215,
		BON:6,
		BIEGI:93,
		P3:45,
		P2:35,
		P1:10,
		P0:3,
		D:0,
		W:2,
		U:0,
		T:0,
		ZW: "48%",
		DOM:2.556,
		WYJAZD:2.208,
		TORA:2.542,
		TORB:2.238,
		TORC:2.35,
		TORD:2.357
	},
	{
		MSC:3,
		ZAWODNIK:"Greg Hancock",
		KLUB:"Toruń",
		SREDNIA:2.175,
		PKT:215,
		BON:6,
		BIEGI:93,
		P3:45,
		P2:35,
		P1:10,
		P0:3,
		D:0,
		W:2,
		U:0,
		T:0,
		ZW: "48%",
		DOM:2.556,
		WYJAZD:2.208,
		TORA:2.542,
		TORB:2.238,
		TORC:2.35,
		TORD:2.357		
	}
	];

	constructor() { }

  ngOnInit() {
  }

}
