import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  @ViewChild('myCanvas') canvas: any;

    canvasElement: any;
    lastX: number;
    lastY: number;

    currentColour: string = '#DA011C';
    brushSize: number = 10;

    constructor(public platform: Platform, public renderer: Renderer, private navController: NavController, private router: Router, public toastController: ToastController) {
        console.log('Hello CanvasDraw Component');
    }

    ngAfterViewInit(){

        this.canvasElement = this.canvas.nativeElement;

        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

    }

    public changes: boolean = false;

    handleStart(ev){

        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
        this.changes= true;
    }

    handleMove(ev){

        let ctx = this.canvasElement.getContext('2d');
        let currentX = ev.touches[0].pageX;
        let currentY = ev.touches[0].pageY;

        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();       

        this.lastX = currentX;
        this.lastY = currentY;

    }
  
    validate () {
        this.navController.navigateForward('/tabs/patients');

    }
 
    

  

  

  
  
  ngOnInit() {
  }

}


