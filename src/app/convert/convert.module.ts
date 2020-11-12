import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { ConvertRoutingModule } from './convert-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ConversionService } from './service/conversion.service';
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [ ConversionComponent ],
    imports: [
        CommonModule,
        ConvertRoutingModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule
    ],
  providers:[
    ConversionService
  ]

})
export class ConvertModule { }
