import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = [{name: 'event 1', description: 'description of this event'},
  {name: 'event 2', description: 'description of second event'},{name: 'event 3', description: 'description of this event'},
  {name: 'event 4', description: 'description of second event'},{name: 'event 5', description: 'description of this event'},
  {name: 'event 6', description: 'description of second event'},{name: 'event 7', description: 'description of this event'},
  {name: 'event 8', description: 'description of second event'},{name: 'event 9', description: 'description of this event'},
  {name: 'event 10', description: 'description of second event'},{name: 'event 11', description: 'description of this event'},
  {name: 'event 12', description: 'description of second event'}];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getEvents().subscribe((data: any) => {console.log(data); this.events = data; }, err => console.log(err));
  }
}
