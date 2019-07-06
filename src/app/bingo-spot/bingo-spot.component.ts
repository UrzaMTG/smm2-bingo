import { Component, OnInit, Input } from '@angular/core';

import { Condition } from '../condition';

@Component({
  selector: 'app-bingo-spot',
  templateUrl: './bingo-spot.component.html',
  styleUrls: ['./bingo-spot.component.css']
})
export class BingoSpotComponent implements OnInit {
  @Input() condition: Condition;
  private isToggled: boolean;

  constructor() { }

  ngOnInit() {
  }

}