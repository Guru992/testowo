import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	result;
  constructor(private _http: Http) {}
  	getPgee2017() {
  		return this._http.get('/pgee2017').map(result => this.result = result.json().data);
  	}
  }