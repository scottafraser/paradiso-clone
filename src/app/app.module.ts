import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    AboutComponent,
    SearchComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
