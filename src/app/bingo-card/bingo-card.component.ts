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
  rows: Condition[][] = [];
  multiplayer: boolean = false;

  constructor(
    private conditionsService: ConditionsService
  ) {
    this.conditionsList = this.conditionsService.conditionsList;
  }

  ngOnInit() {
    // Generate the spots for the bingo card; this will be removed once settings are implemented
    this.generateCard(5, 5);
  }

  generateCard_click()
  {
    this.generateCard(5, 5);
    document.getElementById("bingoTable").classList.remove("hidden");
  }

  private generateCard(desiredRows: number, desiredCols: number): void
  {
    var selectedIDs: number[] = [];

    // Loop until we have enough rows
    while (this.rows.length < desiredRows)
    {
      // Create the collection of conditions for the current row
      var row: Condition[] = [];

      // Loop until we have enough conditions for the row
      while (row.length < desiredCols)
      {
        var randCondition: Condition;

        // Pick a condition from the list
        randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];

        if(this.multiplayer && !randCondition.multiplayer)
        {
          continue;
        }
        else if(!this.multiplayer && !randCondition.singleplayer)
        {
          continue;
        }

        // If the condition we picked is not already in the list, add it to the row
        if (selectedIDs.indexOf(randCondition.id) === -1)
        {
          row.push(randCondition);
          // Keep track of the condition we used to avoid duplicates on the card
          selectedIDs.push(randCondition.id);
        }
      }

      // Add the filled row to the collection of rows
      this.rows.push(row);
    }
  }

  toggleCell(condition: Condition, event: any): void
  {
    var elemId = event.currentTarget.id;

    if (condition.toggled)
    {
      document.getElementById(elemId).classList.remove("toggled");
    }
    else
    {
      document.getElementById(elemId).classList.add("toggled");
    }

    // Make sure to flip the toggled state for the next click
    condition.toggled = !condition.toggled;
  }
}