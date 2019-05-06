import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-polation',
  templateUrl: './inter-polation.component.html',
  styleUrls: ['./inter-polation.component.scss']
})
export class InterPolationComponent {

  name = 'Angular';
  imageUrl = 'image';
  constructor() {}

  public  interPolationTest(): string {

    return 'Value from Function';
  }
}
