import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portlandiso';
  results = '';
  
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    const apikey = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=362&apikey=78YdtipIqhSGSN23YM5rs8yRQZbWoTeT"

    this.http.get('apikey').subscribe(data => {
      console.log(data);
    });
  }
}