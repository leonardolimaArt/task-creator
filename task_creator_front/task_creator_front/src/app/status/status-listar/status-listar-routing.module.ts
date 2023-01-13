import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListarComponent } from './status-listar/status-listar.component';

const routes: Routes = [
  {
    path: "", component: StatusListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasListarRoutingModule { }
