import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Show } from '../show.model';
import { TicketmasterApiShowsService } from '../ticketmaster-api-shows.service';
import {ShowService} from '../show.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Http } from '@angular/http';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css'],
  providers: [TicketmasterApiShowsService]
})
export class ShowDetailComponent implements OnInit {
  show = [];
  showId = null;
  showToDisplay;

  constructor(private route: ActivatedRoute,
     private location: Location,
     private apiShows: TicketmasterApiShowsService,
      private http: Http) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.showId = urlParameters['id'];
    });
    this.apiShows.getShowById(this.showId).subscribe(dataLastEmittedFromObserver => {
      this.showToDisplay = dataLastEmittedFromObserver;
    console.log(this.showToDisplay);
    });
  }

}
