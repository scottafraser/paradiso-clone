import { Component, OnInit, Input, Directive, HostListener} from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';
import {ShowService} from '../show.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { TicketmasterApiShowsService } from '../ticketmaster-api-shows.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css'],
  providers: [TicketmasterApiShowsService]
})

export class ProgrammeComponent implements OnInit {
  shows: any[];
  today: string;
  noShows = false;
  dates: any[];
  showsByDates: any[];
  nextShows: any[];

  constructor(private router: Router, private apiShows: TicketmasterApiShowsService) { }

  getToday() {
    const today  = new Date;
    this.today = today.toISOString().slice(0, 10);
    return this.today;
  }


    ngOnInit() {
      this.shows = [];
      this.apiShows.getAlotOfPDXShows().subscribe(response => {
        if (response.json()._embedded.events.length > 0) {
          this.shows = response.json()._embedded.events;
        }
        console.log(this.shows);
      });
      this.getToday();
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    const height = document.getElementById('body').scrollHeight;
    const bottomHeight = window.pageYOffset + window.innerHeight;

    if (height === bottomHeight) {
      this.nextShows = null;
      this.apiShows.getAlotOfPDXShowsNextPage().subscribe(response => {
        if (response.json()._embedded.events.length > 0) {
          this.nextShows = response.json()._embedded.events;
        }
        console.log(this.nextShows);
      });
    }
  }

  goToDetailPage(clickedShow) {
    this.router.navigate(['shows', clickedShow.id]);
  }

}
