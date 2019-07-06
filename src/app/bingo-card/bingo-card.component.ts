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

    while (this.row1.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.row1.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }

    while (this.row2.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.row2.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }

    while (this.row3.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.row3.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }

    while (this.row4.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.row4.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }

    while (this.row5.length < 5)
    {
      var randCondition: Condition;
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.row5.push(randCondition);
        selectedIDs.push(randCondition.id);
      }
    }
  }

  toggleCell(condition: Condition, event: any): void
  {
    var elemId = event.explicitOriginalTarget.id;

    if (condition.toggled)
    {
      document.getElementById(elemId).classList.remove("toggled");
    }
    else
    {
      document.getElementById(elemId).classList.add("toggled");
    }

    condition.toggled = !condition.toggled;
  }
}