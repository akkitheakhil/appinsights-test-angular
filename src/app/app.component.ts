import { LoggingService } from './core/services/logging.service';
import { throwError } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-insights-test';

  constructor(private loggingService: LoggingService) {
    this.loggingService.appInsights.startTrackPage();
    const url = window.location.href;
    this.loggingService.logPageView('Soroco Dashboard',url)
  }

  goToapp() {
    console.log('goToapp')
    this.loggingService.logEvent('Button Click Event')
    const error = Error('App Component Error - ')
    this.loggingService.logException(error)
  }
}
