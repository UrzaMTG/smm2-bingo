import { Injectable } from '@angular/core';

import { Condition} from './condition';
import conditions from '../assets/conditions.json';

@Injectable()
export class ConditionsService {
  conditionsList: Condition[] = conditions;

  selectRandomCondition(multiplayer: boolean): Condition
  {
    var randCondition: Condition = null;

    while (randCondition === null)
    {
      // Pick a condition from the list
      randCondition = this.conditionsList[Math.floor(Math.random() * this.conditionsList.length)];

      if(multiplayer && !randCondition.multiplayer)
      {
        randCondition = null;
      }
      else if(!multiplayer && !randCondition.singleplayer)
      {
        randCondition = null;
      }
    }

    return randCondition;
  }
}