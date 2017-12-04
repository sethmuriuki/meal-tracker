import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Details} from '../details';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  @Input() childSelect: Details[];
  @Output() clickNewSender = new EventEmitter();

  finishedEditing() {
    this.clickNewSender.emit();
  }
}
