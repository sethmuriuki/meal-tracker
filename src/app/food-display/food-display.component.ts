import { Component, OnInit, Input } from '@angular/core';
import{ Details}  from "../details";
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  @Input()childFoodDisplay: Details[];


  constructor() { }

  ngOnInit() {
  }

}
