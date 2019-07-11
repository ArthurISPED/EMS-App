import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  constructor(private navController: NavController, private router: Router, public toastController: ToastController, public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
   doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
  }
	openPatient() {
	
		this.navController.navigateForward('/patient');
    this.presentToast()
	}

  async presentToast() {
    const toast = await this.toastController.create({
      
      message: 'Start drawing',
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  public openChat() {

  this.navController.navigateForward(`/chat`);
  }
}

