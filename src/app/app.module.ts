import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlingService } from './core/services/error-handling.service';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlingService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
