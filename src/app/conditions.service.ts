import { Injectable } from '@angular/core';

import { Condition} from './condition';
import conditions from '../assets/conditions.json';

@Injectable()
export class ConditionsService {
  conditionsList: Condition[] = conditions;
}