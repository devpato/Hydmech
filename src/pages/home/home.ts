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
  homePage = HomePage;
  passValue : string = "";
  userValue : string = "";
  tempPass : string = "";
  tempUser : string = "";
  tempUsers : JSON;
  tempFlag: boolean = false;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,private http: Http) {
    this.cleanInput = new EventEmitter();
  }

 //https://api.myjson.com/bins/ https://jsonblob.com/850ee672-9d9a-11e7-aa97-09434374a2b8 https://quarkbackend.com/getfile/wearetamo/hydmech //https://www.jasonbase.com
 //http://myjson.com
  changePage( myPass: string, username:string){
    for(const i of Object.keys(this.tempUsers)){
      if(myPass == this.tempUsers[i].password && username == this.tempUsers[i].username){
        this.tempFlag = true;
      }
    }
    if(this.tempFlag) {
      this.navCtrl.push(this.mainPage);
      this.passValue = '';
      this.userValue = '';
      this.tempFlag = false;
    } else {
      const alert = this.alertCtrl.create({
        title:'Wrong Username or Password',
        subTitle: 'Please enter the correct username or Password',
        message: "if you don't know the Username or Password please contact the admin of the app.",
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
    return this.http.get('https://www.jasonbase.com/things/B8Jm.json').map((res) => res.json()).subscribe(data => {
     console.log(data.users);
     this.tempUsers= data.users;     
    }, (rej) => {console.error("Could not load local data",rej)});
  }//https://www.jasonbase.com/things/B8Jm/edit

  ionViewDidEnter(){
    this.getJSON();
    console.log("enter");
  }
}
    

  


