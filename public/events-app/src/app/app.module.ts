import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventStoreService } from './services/event-store.service';
import { ApiService } from './services/api.service';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [EventStoreService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
