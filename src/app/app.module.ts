import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { CardRowComponent } from './card-row/card-row.component';
import { CardComponent } from './card-row/card/card.component';
import { NotificationComponent } from './notification/notification.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,

    CardComponent,
    CardRowComponent,
    NotificationComponent,
    QuestionComponent,
    ScoreComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class AppModule {}
