import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.page.html',
  styleUrls: ['./newmessage.page.scss'],
})
export class NewmessagePage implements OnInit {

  messages = [
    {
      user: 'simon',
      createdAt: 1554090856000,
      msg: 'Hey whats up mate?'
    },
    {
      user: 'max',
      createdAt: 1554090956000,
      msg: 'Working on the Ionic mission, you?'
    },
    {
      user: 'simon',
      createdAt: 1554091056000,
      msg: 'Doing some new tutorial stuff'
    }
  ];
 
  currentUser = 'simon';
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;
 
  constructor() {
  }
 
  sendMessage() {
    this.messages.push({
      user: 'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
 
    this.newMsg = '';
 
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
  ngOnInit() {
  }

}
