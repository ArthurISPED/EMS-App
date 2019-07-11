import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  constructor(private navController: NavController, private router: Router) { }
 
  ngOnInit() {
  }
 

 
  openForms() {

    this.navController.navigateForward(`/forms`);
  }
 
  openMissions() {

    this.navController.navigateForward(`/missions`);
  }

  openPatients() {

    this.navController.navigateForward(`/patients`);
  }

  openTeams() {

    this.navController.navigateForward(`/teams`);
  }
}
