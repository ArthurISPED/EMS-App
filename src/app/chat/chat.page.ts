import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }


	newmessage = function () {

	this.navController.navigateForward('/newmessage')
	}

  ngOnInit() {
  }

}
