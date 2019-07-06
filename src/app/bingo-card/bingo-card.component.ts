import { Component, OnInit } from '@angular/core';

import { Condition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {
  conditionsList: Condition[];
  row1: Condition[] = [];
  row2: Condition[] = [];
  row3: Condition[] = [];
  row4: Condition[] = [];
  row5: Condition[] = [];

  constructor(
    private conditionsService: ConditionsService
  ) {
    this.conditionsList = this.conditionsService.conditionsList;
  }

  ngOnInit() {
    var selectedIDs: number[] = [];

    //while (this.row1.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) > -1)
      {
        this.row1.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }
    this.row2.push(this.conditionsList[0]);
    this.row2.push(this.conditionsList[0]);
    this.row2.push(this.conditionsList[0]);
    this.row2.push(this.conditionsList[0]);
    this.row2.push(this.conditionsList[0]);
  }

}