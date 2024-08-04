import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: InputComponent,
    title: 'Input'
  },
  {
    path: 'result',
    component: ResultComponent,
    title: 'Result'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
