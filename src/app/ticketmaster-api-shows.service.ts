import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {API_KEY} from './api-keys';

@Injectable()
export class TicketmasterApiShowsService {

  constructor(private http: Http) { }

  getPDXShows() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&postalCode=97214`);
  }

  getAlotOfPDXShows() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}
    &radius=20&size=100&sort=date,asc&city=portland&countryCode=US`);
  }

  getShowById(showId: string) {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?id=${showId}&apikey=${API_KEY}`);
  }

}
