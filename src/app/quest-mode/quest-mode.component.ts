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
  selector: 'app-quest-mode',
  templateUrl: './quest-mode.component.html',
  styleUrls: ['./quest-mode.component.css'],
  animations: [
    // animation triggers go here
    trigger('toggleUntoggle', [
      //states
      state('untoggled', style({
        backgroundColor: 'white',
        color: 'black'
      })),
      state('toggled', style({
        backgroundColor: 'black',
        color: 'white'
      })),
      //transitions
      transition('untoggled => toggled', [
        animate('.75s')
      ]),
      transition('toggled => untoggled', [
        animate('.75s')
      ]),
    ]),
    trigger('completeQuest', [
      //states
      //transitions
    ]),
  ]
})

export class QuestModeComponent implements OnInit {
  multiplayer: boolean = false;
  activeQuests: Condition[];
  completedQuests: Condition[][];
  completedCount: number;

  constructor(
    private conditionsService: ConditionsService
  ) { }

  ngOnInit() {
  }

  startQuest(): void {
    this.completedQuests = [];
    this.completedQuests.push([]);
    this.completedCount = 0;

    this.selectNewQuests(null);
    
    document.getElementById("questArea").classList.remove("hidden");
  }

  selectNewQuests(previousQuest: Condition | null): void {
    this.activeQuests = [];

    var selectedIDs: number[] = [];
    while (this.activeQuests.length < 3)
    {
      var randCondition: Condition;

      // Pick a condition from the list
      randCondition = this.conditionsService.selectRandomCondition(this.multiplayer);

      if (previousQuest !== null && randCondition.id === previousQuest.id)
      {
        continue;
      }

      // If the condition we picked is not already in the list, add it to the row
      if (selectedIDs.indexOf(randCondition.id) === -1)
      {
        this.activeQuests.push(randCondition);
        // Keep track of the condition we used to avoid duplicates on the card
        selectedIDs.push(randCondition.id);
      }
    }
  }

  completeQuest(quest: Condition, event: any): void {
    this.completedCount++;
    this.completedQuests[this.completedQuests.length - 1].push(quest);
    if (this.completedQuests[this.completedQuests.length - 1].length == 10)
    {
      this.completedQuests.push([]);
    }
    this.selectNewQuests(quest);
  }

}