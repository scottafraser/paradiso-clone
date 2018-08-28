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

  constructor(private router: Router, private apiShows: TicketmasterApiShowsService) { }

    ngOnInit() {
      this.shows = [];
      this.apiShows.getPDXShows().subscribe(response => {
        if (response.json()._embedded.events.length > 0) {
          this.shows = response.json()._embedded.events;
        }
        console.log(this.shows);
      });
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    const height = document.getElementById('body').offsetHeight;
    const bottomHeight = window.pageYOffset + window.innerHeight;
    console.log('offset height' + height);
    console.log('Scroll Event', window.pageYOffset + window.innerHeight);
    if (height === bottomHeight) {
      alert('bottom!');
    }
  }

  goToDetailPage(clickedShow) {
    this.router.navigate(['shows', clickedShow.id]);
  }

}
