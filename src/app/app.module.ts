import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ConditionsService } from './conditions.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BingoCardComponent } from './bingo-card/bingo-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BingoCardComponent },
      { path: 'conditions', component: ConditionListComponent },
    ])
  ],
  declarations: [AppComponent, ConditionListComponent, NavigationBarComponent, BingoCardComponent],
  bootstrap: [AppComponent],
  providers: [ConditionsService]
})
export class AppModule { }
