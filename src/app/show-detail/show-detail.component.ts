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

  getShowByID(id) {
      this.show = [];
      this.apiShows.getShowById(id).subscribe(response => {
        if (response.json()._embedded.events.length > 0) {
          this.show = response.json()._embedded.events;
        }
      });
    }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.showId = urlParameters['id'];
      console.log(this.showId);
    });
    this.showToDisplay = this.apiShows.getShowById(this.showId);
    console.log(this.showToDisplay);

    }
  }
