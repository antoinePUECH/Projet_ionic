import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: String;
  firstname: String;
  ajout: Boolean = false;
 
  amis: contact[] = [
    {nom: "figueras", prenom: "maxime", notification: "Vous: Wesh negro ca va ?", src: "Figueras.svg", heure: "09:42"},
    {nom: "puech", prenom: "antoine", notification: "A partager sa localisation", src: "Puech.svg", heure: "19:14"},
  ];



  constructor(public router: Router) {}

  addFriend(name: String, firstname: String, src: String, notification: String , heure: String){
    var ladate=new Date()
    let add: contact = {nom: this.name, src: this.name+".svg", prenom: this.firstname, notification: "Nouvel ami ajouté !", heure: ladate.getHours()+":"+ladate.getMinutes()};
    this.amis.push(add);
  }

  toggle(){
    this.ajout = !this.ajout;
  }
  message() {
    this.router.navigateByUrl('/message');

  }
}
interface contact
{
  nom: String,
  prenom: String,
  notification: String,
  src: String,
  heure: String
}
