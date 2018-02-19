import { Component, OnInit } from '@angular/core';
import { Rider } from "../interfaces/rider";
import { Danepgee2017Service } from '../../danepgee2017.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'gs-pgee2017-stats',
  templateUrl: './pgee2017-stats.component.html',
  styleUrls: ['./pgee2017-stats.component.less'],
})
export class Pgee2017StatsComponent {
pgee2017: Array<any>;
order: string ='MSC';
reverse: boolean = false;
result: number[];
  constructor(private _danePgee2017Service: Danepgee2017Service,
    private orderPipe: OrderPipe) 
  {
    this._danePgee2017Service.getPgee2017().subscribe((response) => {
    this.pgee2017 = orderPipe.transform(response, 'MSC');
  }
  )
  }
  

  	/*this._danePgee2017Service.getPgee2017().subscribe(response => this.pgee2017 = response);
    let copy = this.pgee2017.slice();
    this.result = orderPipe.transform(copy, 'msc');*/

    /*console.log(this.orderPipe.transform(this._danePgee2017Service, this.order));*/

    setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
/*var app = angular.module('myApp', []);
app.controller('orderCtrl', function($scope) {
	$scope.riders = Pgee2017StatsComponent;
});*/

/*.controller('mainController', function($scope) {
	$scope.sortType = 'srednia';
	$scope.sortReverse = false;
	$scope.searchZawodnik = '';
})*/