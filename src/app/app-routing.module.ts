import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'applications', component: ApplicationsListComponent },
  {
    path: 'application-detail',
    children: [
      {
        path: ':id',
        component: ApplicationDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
