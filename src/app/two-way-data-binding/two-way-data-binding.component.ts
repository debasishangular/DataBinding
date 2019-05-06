import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})

export class TwoWayDataBindingComponent implements OnInit {

  myMsg =  'Hello World!';
  myMsg2 = 'Hello World2';
  myMsg3 = 'Hello World3';


  constructor() { }

  ngOnInit() {
  }

}
