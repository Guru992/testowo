import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";


const PGEE2017_ROUTES : Route[] = [
	/*{ path: 'pgee17/:id', component: Pgee2017Zawodnik}*/
];

@NgModule({
	imports: [
	RouterModule.forChild(PGEE2017_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class Pgee2017RoutingModule {}