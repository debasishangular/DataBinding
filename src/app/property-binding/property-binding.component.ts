import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  flag = true;
  msgForChild = 'Messahe shown in child';
  colorFlag = false;
  isSmall = true;
  isBackgroundRed = false;
  small = 10;
  big = 15;
  website = {
    name: 'xxx',
    url: 'http://www.google.com',
    logo: '../../assets/images/logodesign.png',
    description: 'Learn angular  property binding.'
  };
  getMyStyles() {
    const myStyles = {
       'color': this.colorFlag ? 'black' : 'yellow',
       'font-size.em': this.isSmall ? this.small / 5 : this.big / 5,
       'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
    };
    return myStyles;
}
}
