import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  pgee2017: Array<any>;
  constructor(private _dataService: DataService) {
  	this._dataService.getPgee2017().subscribe(response => this.pgee2017 = response);
  }
}
