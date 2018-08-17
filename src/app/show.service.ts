import { Injectable } from '@angular/core';
import { Show} from './show.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShowService {
  shows: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shows = database.list('shows');
   }

  getShows() {
   return this.shows;
  }

  // getShowById(showId: number) {
  //   const SHOWS: Show[] = [
  //     new Show(
  //     'Scotts Show',
  //     'Scotts House',
  //     '9-1-18',
  //     1000,
  //     'Gonna be a great show',
  //     `'from the great white north,hails a true modern genius and poet,
  //     this is going to be one hell of a show, you dont say, this is really how you get
  //     around that darn string max thing, eh?'`,
  //     100,
  //     true,
  //     1)
  //   ];

  //   for (let i = 0; i <= SHOWS.length - 1; i++) {
  //     if (SHOWS[i].id === showId) {
  //       return SHOWS[i];
  //     }
  //   }
  // }

}

