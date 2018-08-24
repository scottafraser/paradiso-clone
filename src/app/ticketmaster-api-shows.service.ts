import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {API_KEY} from './api-keys';

@Injectable()
export class TicketmasterApiShowsService {

  constructor(private http: Http) { }

  getPDXShows() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?
      apikey=78YdtipIqhSGSN23YM5rs8yRQZbWoTeT&postalCode=97214`);
  }

}
