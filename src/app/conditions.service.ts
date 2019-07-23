import { Injectable } from '@angular/core';

import { Condition} from './condition';
import conditions from '../assets/conditions.json';

@Injectable()
export class ConditionsService {
  conditionsList: Condition[] = conditions;

  selectRandomCondition(multiplayer: boolean): Condition
  {
    let randCondition: Condition = null;

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

    return this.clone(randCondition);
  }

  private clone(baseCond: Condition): Condition {
    let cond: Condition = new Condition();
    
    cond.id = baseCond.id,
    cond.text = baseCond.text;
    cond.description = baseCond.description;
    cond.toggled = false; // The important part
    cond.singleplayer = baseCond.singleplayer;
    cond.multiplayer = baseCond.multiplayer;

    return cond;
  }
}