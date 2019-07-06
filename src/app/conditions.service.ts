import { Injectable } from '@angular/core';

import conditions from '../assets/conditions.json';

@Injectable()
export class ConditionsService {
  conditionsList = conditions;
}