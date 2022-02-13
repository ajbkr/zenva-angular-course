import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NotificationComponent } from './notification/notification.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    NotificationComponent,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class AppModule {}
