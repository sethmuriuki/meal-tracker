import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MealpipePipe } from './mealpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodDisplayComponent,
    EditFormComponent,
    MealpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
