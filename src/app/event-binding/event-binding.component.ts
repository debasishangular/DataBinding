import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  data: string;
  public clickFunction(event: KeyboardEvent): void {
   // const val = (<HtmlInputElement>event.target).value;
    console.log(event);
    this.data = 'Hey you clicked me !!';
  }
}
