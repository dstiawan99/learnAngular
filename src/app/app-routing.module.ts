import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
  {
    path: 'class', component: ClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ClassComponent]
