import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';
import {ShowService} from '../show.service';




@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css'],
  providers: [ShowService]
})
export class ProgrammeComponent implements OnInit {
  shows: Show[];

  constructor(private router: Router, private showService: ShowService) {}

  ngOnInit() {
    this.shows = this.showService.getShows();
  }

  goToDetailPage(clickedShow: Show) {
    this.router.navigate(['shows', clickedShow.id]);
  }

}