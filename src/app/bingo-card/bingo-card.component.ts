import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Condition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css'],
  animations: [
    // animation triggers go here
    trigger('toggleUntoggle', [
      //states
      state('toggled', style({
        backgroundColor: 'white',
        color: 'black'
      })),
      state('untoggled', style({
        backgroundColor: 'black',
        color: 'white'
      })),
      //transitions
      transition('untoggled => toggled', [
        animate('.5s')
      ]),
      transition('toggled => untoggled', [
        animate('.5s')
      ]),
    ])
  ]
})

export class BingoCardComponent implements OnInit {
  rows: Condition[][];
  multiplayer: boolean = false;

  constructor(
    private conditionsService: ConditionsService
  ) { }

  ngOnInit() {
  }

  generateCard_click()
  {
    this.generateCard(5, 5);
    document.getElementById("bingoTable").classList.remove("hidden");
  }

  private generateCard(desiredRows: number, desiredCols: number): void
  {
    this.rows = [];

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
        randCondition = this.conditionsService.selectRandomCondition(this.multiplayer);

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
    // Make sure to flip the toggled state for the next click
    condition.toggled = !condition.toggled;
  }
}