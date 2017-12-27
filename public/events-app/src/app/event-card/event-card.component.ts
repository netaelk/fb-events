import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  // @Input() title = 'card title';
  // @Input() description = 'event description';
  @Input() event;
  hour = '';
  date = '';
  colors = ['#009688', '#F44336', '#E91E63', '#9C27B0', '#3F51B5', '#2196F3', '#8BC34A', '#FFC107', '#FFEB3B', '#607D8B'];
  color = '';
  constructor() { }

  ngOnInit() {
    this.color = this.randColor();
    const date = new Date(this.event && this.event.startTime);
    this.hour = date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 3);
    this.date = date.toLocaleDateString();
  }

  private randColor() {
    return this.colors[this.getRandomInt(0, this.colors.length)];
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

}
