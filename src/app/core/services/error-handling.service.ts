import { LoggingService } from './logging.service';
import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService extends ErrorHandler {

  constructor(private loggingService: LoggingService) {
    super()
  }

  handleError(error: Error) {
    this.loggingService.logException(error); // Manually log exception
  }
}
