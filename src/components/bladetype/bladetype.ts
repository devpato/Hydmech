import { Component } from '@angular/core';

/**
 * Generated class for the BladetypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bladetype',
  templateUrl: 'bladetype.html'
})
export class BladetypeComponent {

  text: string;

  constructor() {
    console.log('Hello BladetypeComponent Component');
    this.text = 'Hello World';
  }

}
