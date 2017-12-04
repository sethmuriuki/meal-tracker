import { Component } from '@angular/core';
import { Details } from './details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';
  public masterFoodDisplay: Details[]= [];
  newSelect: Details= null;
  // childSelect = false;

  newInput(newInputFromChild: Details) {
    this.masterFoodDisplay.push(newInputFromChild);
  }
  showDetails(newEdit: Details) {
    this.newSelect = newEdit;
  }
  finishedEdit() {
    this.newSelect = null;
  }

  // showEdit() {
  //   this.childSelect = true;
  // }
}
