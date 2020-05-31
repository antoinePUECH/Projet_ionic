import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  msg: String;

  messages: contenu[] = [{
    message: "att jte repond dans 2 sec"
  }]




  constructor(public router: Router) { }

  ngOnInit() {
  }
 send(){
  let add: contenu = {message: this.msg};
  this.messages.push(add);
 }
 Back() {
  this.router.navigateByUrl('');

}
  
}

interface contenu{
  message: String
}
