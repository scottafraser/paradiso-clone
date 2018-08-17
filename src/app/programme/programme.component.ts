import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor(private router: Router) {}
    shows: Show[] = [
    new Show(
    'Scotts Show',
    'Scotts House',
    '9-1-18',
    1000,
    'Gonna be a great show',
    `'from the great white north,hails a true modern genius and poet,
    this is going to be one hell of a show, you dont say, this is really how you get
    around that darn string max thing, eh?'`,
    100,
    true,
    1)
  ];



  ngOnInit() {
  }

  goToDetailPage(clickedShow: Show) {
    this.router.navigate(['shows', clickedShow.id]);
  }

}
