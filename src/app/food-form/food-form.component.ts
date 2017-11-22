import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ Details}  from "../details";
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  @Output() newInputSender = new EventEmitter();
  addNewFood(foodName: string, description: string, calories: number){
    var mealDetails: Details = new Details(foodName, description, calories);
    this.newInputSender.emit(mealDetails)
  }

  constructor() { }

  ngOnInit() {
  }

}
