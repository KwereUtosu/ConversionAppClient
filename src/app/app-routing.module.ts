import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'convert',
    loadChildren: () => import('./convert/convert.module').then(m => m.ConvertModule)
  },
  {
    path: '',
    redirectTo: 'convert',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
