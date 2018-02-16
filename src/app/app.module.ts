import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Danepgee2017Service } from './danepgee2017.service';
import { Pgee2017Module } from './pgee2017/pgee2017.module';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Pgee2017Module
  ],
  providers: [Danepgee2017Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localePl, 'pl');
