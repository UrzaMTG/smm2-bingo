import { Component, OnInit } from '@angular/core';

import { Condition } from '../condition';
import { ConditionsService } from '../conditions.service';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.css']
})
export class ConditionListComponent implements OnInit {
  conditions: Condition[];

  constructor(
    private conditionsService: ConditionsService
  ) { 
    this.conditions = this.conditionsService.conditionsList;
  }

  ngOnInit() {
  }

}