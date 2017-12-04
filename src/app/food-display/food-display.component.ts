import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Details } from '../details';
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent {
  @Input() childFoodDisplay: Details[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteMeal = new EventEmitter();

  public selectCalorie: String = 'all';
  onChange(option) {
    this.selectCalorie = option;
  }

  editButton(editMeal: Details) {
    this.clickSender.emit(editMeal);
  }
   
  deleteButton(deletedMeal: Details) {
    this.deleteMeal.emit(deletedMeal);
  }

}
