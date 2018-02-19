import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Danepgee2017Service {
	result;
  constructor(private _http: Http) {}
  	getPgee2017() {
  		return this._http.get('/pgee2017').map(result => this.result = result.json().data);
  	}

	getPgee2017pary() {
  		return this._http.get('/pgee2017pary').map(result => this.result = result.json().data);
  	}

  }