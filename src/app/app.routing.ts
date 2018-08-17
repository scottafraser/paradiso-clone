import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammeComponent } from './programme/programme.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ProgrammeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'shows/:id',
        component: ShowDetailComponent
      }

    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
