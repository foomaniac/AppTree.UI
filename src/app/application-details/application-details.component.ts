import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../models/application';
import { ApplicationService } from '../services/application-service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
})
export class ApplicationDetailsComponent implements OnInit {
  applicationId: number;
  application: Application;

  constructor(
    private route: ActivatedRoute,
    private appService: ApplicationService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.applicationId = +this.route.snapshot.paramMap.get('id');
      this.loadApplication();
    }
  }

  loadApplication() {
    if (this.applicationId) {
      this.appService
        .getApplication(this.applicationId)
        .subscribe((app) => (this.application = app));
    }
  }
}
