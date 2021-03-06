import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
 
import {Pgee2017StatsComponent} from "./pgee2017/pgee2017-stats/pgee2017-stats.component";
import {Pgee2017paryStatsComponent} from "./pgee2017/pgee2017pary-stats/pgee2017pary-stats.component";
 
const APP_ROUTES : Route[] = [
    { path: '',   redirectTo: '/pgee17pary', pathMatch: 'full' },
    { path: 'pgee17pary', component: Pgee2017paryStatsComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
 
export class AppRoutingModule {}


/*import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {Pgee2017StatsComponent} from "./pgee2017/pgee2017-stats/pgee2017-stats.component";

const APP_ROUTES : Route[] = [
	{ path: 'pgee17', component: Pgee2017StatsComponent}
];

@NgModule({
	imports: [
	RouterModule.forRoot(APP_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class AppRoutingModule {}*/



/*const APP_ROUTES : Route[] = [
	{ path: '', component: HeaderComponent },
	{ path: 'pgee17', component: Pgee2017StatsComponent}
];*/