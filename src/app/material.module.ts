import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatRadioButton, MatRadioGroup, MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatMomentDateModule,
  ReactiveFormsModule,
  FormsModule

]

@NgModule({
  imports : MATERIAL,
  exports : MATERIAL
})

export class MaterialModule{}

