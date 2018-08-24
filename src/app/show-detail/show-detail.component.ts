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
  shows: any[] = null;
  constructor(private apiShows: TicketmasterApiShowsService, private http: Http) { }

  getAPIShows() {
    this.apiShows.getPDXShows().subscribe(response => {
      this.shows = response.json();
    });
  }

  ngOnInit() {
    }
  }
