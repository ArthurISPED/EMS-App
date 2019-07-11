import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.page.html',
  styleUrls: ['./newform.page.scss'],
})
export class NewformPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  confirm = function() {
  	var buttontext= document.getElementById('buttontext')
  	buttontext.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon><p>Submitted</p>'
  	
  	var color = buttontext.getAttribute('color')
  	buttontext.setAttribute('color', 'success')
  	this.navController.navigateForward('/tabs/forms')
  	
  }

  public toggleChecked: boolean = false;

  public checked() {

  this.toggleChecked =!this.toggleChecked;
  }

  photo() {

  this.navController.navigateForward('/photo');
  }

  ngOnInit() {
  }

}
