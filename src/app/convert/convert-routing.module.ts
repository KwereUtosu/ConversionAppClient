import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionComponent } from './pages/conversion/conversion.component';



const routes: Routes = [
  {
    path: '',
    component: ConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertRoutingModule { }