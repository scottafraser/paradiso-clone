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

  getShowById(showId: string) {
    return this.database.object('shows/' + showId);
  }

}

