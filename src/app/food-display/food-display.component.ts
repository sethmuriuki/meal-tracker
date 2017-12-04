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

  editButton(editMeal: Details) {
    this.clickSender.emit(editMeal);
  }
}
