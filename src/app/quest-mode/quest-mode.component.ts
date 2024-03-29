import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Condition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-quest-mode',
  templateUrl: './quest-mode.component.html',
  styleUrls: ['./quest-mode.component.css'],
  animations: [
    // animation triggers go here
    trigger('completeQuest', [
      //transitions
      transition(':enter', [
        style({ opacity: 0 }),
        animate('750ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ]),
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
    this.activeQuests = null;
  }

  finishAnimation(quest: Condition): void {
    if (this.activeQuests === null)
    {
      this.selectNewQuests(quest);
    }
  }

}