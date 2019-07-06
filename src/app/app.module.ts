import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ConditionsService } from './conditions.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';
import { BingoSpotComponent } from './bingo-spot/bingo-spot.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BingoCardComponent },
      { path: 'conditions', component: ConditionListComponent },
    ])
  ],
  declarations: [AppComponent, ConditionListComponent, NavigationBarComponent, BingoCardComponent, BingoSpotComponent],
  bootstrap: [AppComponent],
  providers: [ConditionsService]
})
export class AppModule { }
