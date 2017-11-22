import { Component } from '@angular/core';
import{ Details}  from "./details";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';
  public masterFoodDisplay: Details[]=[];
  newInput(newInputFromChild: Details){
    this.masterFoodDisplay.push(newInputFromChild)
  }
}
