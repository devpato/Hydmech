import { Component,Output,EventEmitter,Injectable } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {MainPage} from '../main/main';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  @Output() cleanInput :  EventEmitter<string>;
  mainPage = MainPage;
  passValue : string = "";
  tempPass : string = "";
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,private http: Http) {
    this.cleanInput = new EventEmitter();
  }

 //https://api.myjson.com/bins/1alzx1
 //http://myjson.com
  changePage( myPass: string){
    this.getJSON();
    if(myPass == this.tempPass) {
      this.navCtrl.push(this.mainPage);
      this.passValue = '';
    } else {
      const alert = this.alertCtrl.create({
        title:'Wrong Password',
        subTitle: 'Please enter the correct password',
        message: "if you don't know the password please contact the admin of the app.",
        buttons: [
          {
            text: 'Close',
            handler: ()=> {
              this.passValue = '';
              
            }
          }
        ]
      });
      alert.present();
    }
  }

  getJSON(){
    return this.http.get('https://api.myjson.com/bins/1alzx1').map((res) => res.json()).subscribe(data => {
     console.log(data.password);
     this.tempPass= data.password;   
    }, (rej) => {console.error("Could not load local data",rej)});
  }
}
    

  


