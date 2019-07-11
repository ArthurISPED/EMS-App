import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
	
	constructor(private navController: NavController, private router: Router) { }


	newmessage = function () {

	this.navController.navigateForward('/newmessage')
	}

	ngOnInit() {
  }
}
