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
  noShows = false;
  dates: any[];
  showsByDates: any[];

  constructor(private router: Router, private apiShows: TicketmasterApiShowsService) { }

    ngOnInit() {
      this.shows = [];
      this.apiShows.getAlotOfPDXShows().subscribe(response => {
        if (response.json()._embedded.events.length > 0) {
          this.shows = response.json()._embedded.events;
        }
        console.log(this.shows);
      });
  }

  // sortShows(shows) {
  //     let show = shows[0];
  //     for (show = 0; show > this.shows.length; show++) {
  //       if (show.dates.start.localDate !== show.dates.start.localDate.length - 1 ) {
  //         this.dates.push(show);
  //       } else if (show.dates.start.localDate === show.dates.start.localDate.length - 1 ) {
  //         this.showsByDates.push(show.dates.start.localDate);
  //       }
  //     }
  //   return this.showsByDates;
  //   }


  @HostListener('window:scroll', ['$event'])
  doSomething() {
    const height = document.getElementById('body').offsetHeight;
    const bottomHeight = window.pageYOffset + window.innerHeight;
    if (height === bottomHeight) {
      alert('bottom!');
    }
  }

  goToDetailPage(clickedShow) {
    this.router.navigate(['shows', clickedShow.id]);
  }

}
