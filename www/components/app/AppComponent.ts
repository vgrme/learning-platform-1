import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewProblemComponent} from '../view-problem/ViewProblemComponent.ts';
import {EditProblemComponent} from '../edit-problem/EditProblemComponent.ts';

@Component({
	selector: 'app',
	templateUrl: 'www/components/app/app.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/view-problem/:username/:problem-id', component: ViewProblemComponent },
	{ path: '/edit-problem/:username/:problem-id', component: EditProblemComponent }
])

export class AppComponent {

	constructor() {

	}

}
