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
  row1: Condition[] = new Array();
  row2: Condition[] = new Array();
  row3: Condition[] = new Array();
  row4: Condition[] = new Array();
  row5: Condition[] = new Array();

  constructor(
    private conditionsService: ConditionsService
  ) {
    this.conditionsList = this.conditionsService.conditionsList;
  }

  ngOnInit() {
    var selectedIDs: number[] = new Array();

    while (this.row1.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.find(randCondition.id) !== undefined)
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