import { Component, OnInit } from '@angular/core';

import { Condition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-quest-mode',
  templateUrl: './quest-mode.component.html',
  styleUrls: ['./quest-mode.component.css']
})
export class QuestModeComponent implements OnInit {
  conditionsList: Condition[];
  multiplayer: boolean = false;
  activeQuests: Condition[];
  completedQuests: Condition[][];

  constructor(
    private conditionsService: ConditionsService
  ) {
    this.conditionsList = this.conditionsService.conditionsList;
  }

  ngOnInit() {
  }

  startQuest(): void {
    this.completedQuests = [];
    this.completedQuests.push([]);

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
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];

      if (previousQuest !== null && randCondition.id === previousQuest.id)
      {
        continue;
      }
      else if(this.multiplayer && !randCondition.multiplayer)
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
        this.activeQuests.push(randCondition);
        // Keep track of the condition we used to avoid duplicates on the card
        selectedIDs.push(randCondition.id);
      }
    }
  }

  completeQuest(quest: Condition, event: any): void {
    this.completedQuests[this.completedQuests.length - 1].push(quest);
    if (this.completedQuests[this.completedQuests.length - 1].length == 10)
    {
      this.completedQuests.push([]);
    }
    this.selectNewQuests(quest);
  }

}