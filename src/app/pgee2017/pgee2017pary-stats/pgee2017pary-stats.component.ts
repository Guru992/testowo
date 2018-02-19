import { Component, OnInit } from '@angular/core';
import { Pair } from "../interfaces/pair";
import { Danepgee2017Service } from '../../danepgee2017.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'gs-pgee2017pary-stats',
  templateUrl: './pgee2017pary-stats.component.html',
  styleUrls: ['./pgee2017pary-stats.component.less']
})
export class Pgee2017paryStatsComponent {
pgee2017pary: Array<any>;
order: string ='PLUSMINUS';
reverse: boolean = false;
result: number[];
  constructor(private _danePgee2017Service: Danepgee2017Service,
    private orderPipe: OrderPipe) 
  {
    this._danePgee2017Service.getPgee2017pary().subscribe((response) => {
    this.pgee2017pary = orderPipe.transform(response, 'PLUSMINUS');
   }
  )
  }
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}

