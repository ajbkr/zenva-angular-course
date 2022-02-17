import { Component } from '@angular/core';

import { GameService } from './../game.service';

@Component({
  selector: 'app-score',
  styleUrls: [
    './score.component.css'
  ],
  templateUrl: './score.component.html'
})
export class ScoreComponent {
  constructor(public gameService: GameService) {}
}
